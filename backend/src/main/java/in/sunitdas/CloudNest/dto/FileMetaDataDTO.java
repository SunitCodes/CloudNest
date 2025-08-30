package in.sunitdas.CloudNest.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FileMetaDataDTO {

    @Id
    private String id;
    private String clerkId;
    private String name;
    private String type;
    private Long size;
    private String fileLocation;
    private Boolean isPublic;
    private LocalDateTime uploadedAt;

}
