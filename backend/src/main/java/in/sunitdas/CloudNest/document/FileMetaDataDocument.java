package in.sunitdas.CloudNest.document;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Document(collection="files")
public class FileMetaDataDocument {

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
