package in.sunitdas.CloudNest.controller;

import in.sunitdas.CloudNest.document.UserCredits;
import in.sunitdas.CloudNest.dto.FileMetaDataDTO;
import in.sunitdas.CloudNest.service.FileMetaDataService;
import in.sunitdas.CloudNest.service.UserCreditsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

}


