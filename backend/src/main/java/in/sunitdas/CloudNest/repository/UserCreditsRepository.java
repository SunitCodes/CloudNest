package in.sunitdas.CloudNest.repository;

import in.sunitdas.CloudNest.document.ProfileDocument;
import in.sunitdas.CloudNest.document.UserCredits;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserCreditsRepository extends MongoRepository<UserCredits, String> {

}
