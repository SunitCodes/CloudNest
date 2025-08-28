package in.sunitdas.CloudNest.service;

import in.sunitdas.CloudNest.document.UserCredits;
import in.sunitdas.CloudNest.repository.UserCreditsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserCreditsService {

    private final UserCreditsRepository userCreditsRepository;

    public UserCredits createInitialCredits(String clerkId){
        UserCredits userCredits = UserCredits.builder()
                .clerkId(clerkId)
                .credits(5)
                .plan("BASIC")
                .build();

        return userCreditsRepository.save(userCredits);
    }

}
