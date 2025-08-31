package in.sunitdas.CloudNest.controller;

import in.sunitdas.CloudNest.document.UserCredits;
import in.sunitdas.CloudNest.dto.FileMetaDataDTO;
import in.sunitdas.CloudNest.service.FileMetaDataService;
import in.sunitdas.CloudNest.service.UserCreditsService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/files")
public class FileUploadController {

    private final FileMetaDataService fileMetaDataService;
    private final UserCreditsService userCreditsService;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadFiles(@RequestPart("files")MultipartFile files[]) throws IOException {

        Map<String, Object> response = new HashMap<>();
        List<FileMetaDataDTO> list = fileMetaDataService.uploadFiles(files);

        UserCredits finalCredits = userCreditsService.getUserCredits();

        response.put("files",list);
        response.put("remaining credits",finalCredits.getCredits());
        return ResponseEntity.ok(response);

    }

    @GetMapping("/my")
    public ResponseEntity<?> getCurrentUserFiles(){
        List<FileMetaDataDTO> listOfFiles = fileMetaDataService.getFiles();
        return ResponseEntity.ok(listOfFiles);
    }

    @GetMapping("/public/{id}")
    public ResponseEntity<?> getPublicFiles(@PathVariable String id){
        FileMetaDataDTO file = fileMetaDataService.getPublicFile(id);
        return ResponseEntity.ok(file);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<Resource> download(@PathVariable String id) throws IOException {
        FileMetaDataDTO downloadableFile = fileMetaDataService.getDownloadableFile(id);
        Path path = Paths.get(downloadableFile.getFileLocation());
        Resource resource = new UrlResource(path.toUri());
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment: filename=\""+downloadableFile.getName()
                    +"\"")
                .body(resource);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteFile(@PathVariable String id){
        fileMetaDataService.deleteFile(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{id}/toggle-public")
    public ResponseEntity<?> togglePublic(@PathVariable String id){
        FileMetaDataDTO file = fileMetaDataService.togglePublic(id);
        return ResponseEntity.ok(file);
    }


}


