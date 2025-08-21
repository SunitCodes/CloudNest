package in.sunitdas.CloudNest.repository;

import in.sunitdas.CloudNest.document.ProfileDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ProfileRepository extends MongoRepository<ProfileDocument, String> {
    Optional<ProfileDocument>findByEmail(String email);

    ProfileDocument findByClerkId(String clerkId);
}
