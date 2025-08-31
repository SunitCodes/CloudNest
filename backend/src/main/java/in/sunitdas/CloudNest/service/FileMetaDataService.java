package in.sunitdas.CloudNest.service;

import in.sunitdas.CloudNest.document.FileMetaDataDocument;
import in.sunitdas.CloudNest.document.ProfileDocument;
import in.sunitdas.CloudNest.dto.FileMetaDataDTO;
import in.sunitdas.CloudNest.repository.FileMetaDataRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class FileMetaDataService {

    private final ProfileService profileService;
    private final UserCreditsService userCreditsService;
    private final FileMetaDataRepository fileMetaDataRepository;

    public List<FileMetaDataDTO> uploadFiles(MultipartFile[] files) throws IOException {

        ProfileDocument currentProfile = profileService.getCurrentProfile();

        List<FileMetaDataDocument> savedFiles = new ArrayList<>();
        // Check if the user has enough credits to upload the given number of files
        if (!userCreditsService.hasEnoughCredits(files.length)) {
            throw new RuntimeException("Not enough credits to upload files. Please purchase more credits.");
        }
        // Prepare the upload path (directory in which files will be saved)
        Path uploadPath = Paths.get("upload").toAbsolutePath().normalize();
        Files.createDirectories(uploadPath);

        // For each file in the files array
        for (MultipartFile file : files) {
            // Generate a unique filename using UUID and original filename (to avoid collisions)
            String fileName = UUID.randomUUID() + "." + StringUtils.getFilenameExtension(file.getOriginalFilename());
            // Resolve the target path for saving this file
            Path targetLocation = uploadPath.resolve(fileName);
            // Copy the file data from the input stream to the target location on disk.
            // StandardCopyOption.REPLACE_EXISTING ensures overwriting if the file exists.
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            FileMetaDataDocument fileMetaData = FileMetaDataDocument.builder()
                    .fileLocation(targetLocation.toString())
                    .name(file.getOriginalFilename())
                    .clerkId(currentProfile.getClerkId())
                    .size(file.getSize())
                    .type(file.getContentType())
                    .isPublic(false)
                    .uploadedAt(LocalDateTime.now())
                    .build();

            // Deduct one credit for each file upload
            userCreditsService.consumeCredits();

            savedFiles.add(fileMetaDataRepository.save(fileMetaData));

        }

        return savedFiles.stream().map(fileMetaDataDocument -> mapToDTO(fileMetaDataDocument))
                .collect(Collectors.toList());

    }

    private FileMetaDataDTO mapToDTO(FileMetaDataDocument fileMetaDataDocument) {
        return FileMetaDataDTO.builder()
                .id(fileMetaDataDocument.getId())
                .fileLocation(fileMetaDataDocument.getFileLocation())
                .name(fileMetaDataDocument.getName())
                .clerkId(fileMetaDataDocument.getClerkId())
                .size(fileMetaDataDocument.getSize())
                .type(fileMetaDataDocument.getType())
                .isPublic(fileMetaDataDocument.getIsPublic())
                .uploadedAt(fileMetaDataDocument.getUploadedAt())
                .build();
    }

    public List<FileMetaDataDTO> getFiles(){
        ProfileDocument currentProfile = profileService.getCurrentProfile();
        List<FileMetaDataDocument> files = fileMetaDataRepository.findByClerkId(currentProfile.getClerkId());
        return files.stream().map(this::mapToDTO).collect(Collectors.toList());
    }


    public FileMetaDataDTO getPublicFile(String id) {
        // Attempt to find the file's metadata in the repository by ID
        Optional<FileMetaDataDocument> fileOptional = fileMetaDataRepository.findById(id);
        // If the file was not found or is not marked as public, throw an exception
        if (fileOptional.isEmpty() || !fileOptional.get().getIsPublic()) {
            throw new RuntimeException("Unable to get the file");
        }
        // Extract the document from the Optional
        FileMetaDataDocument document = fileOptional.get();
        // Map the document to a DTO (Data Transfer Object) and return it
        return mapToDTO(document);
    }


}
