package in.sunitdas.CloudNest.service;

import in.sunitdas.CloudNest.document.ProfileDocument;
import in.sunitdas.CloudNest.dto.ProfileDTO;
import in.sunitdas.CloudNest.repository.ProfileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.Instant;

@Service
@RequiredArgsConstructor
public class ProfileService {

   private final ProfileRepository profileRepository;

   public ProfileDTO createProfile(ProfileDTO profileDTO){

       ProfileDocument profile = ProfileDocument.builder()
               .clerkId(profileDTO.getClerkId())
               .email(profileDTO.getEmail())
               .firstName(profileDTO.getFirstName())
               .lastName(profileDTO.getLastName())
               .photoUrl(profileDTO.getPhotoUrl())
               .credits(5)
               .createdAt(Instant.now())
               .build();

       profile = profileRepository.save(profile);

       return ProfileDTO.builder()
               .id(profile.getId())
               .clerkId(profile.getClerkId())
               .email(profile.getEmail())
               .firstName(profile.getFirstName())
               .lastName(profile.getLastName())
               .photoUrl(profile.getPhotoUrl())
               .credits(profile.getCredits())
               .createdAt(profile.getCreatedAt())
               .build();

   }


    public ProfileDTO updateProfile(ProfileDTO profileDTO){

       ProfileDocument existingProfile = profileRepository.findByClerkId(profileDTO.getClerkId());

       if(existingProfile != null){
           if(profileDTO.getEmail() != null && !profileDTO.getEmail().isEmpty()){
               existingProfile.setEmail(profileDTO.getEmail());
           }
           if(profileDTO.getFirstName() != null && !profileDTO.getFirstName().isEmpty()){
               existingProfile.setFirstName(profileDTO.getFirstName());
           }
           if(profileDTO.getLastName() != null && !profileDTO.getLastName().isEmpty()){
               existingProfile.setLastName(profileDTO.getLastName());
           }
           if(profileDTO.getPhotoUrl() != null && !profileDTO.getPhotoUrl().isEmpty()){
               existingProfile.setPhotoUrl(profileDTO.getPhotoUrl());
           }

           profileRepository.save(existingProfile);

           return ProfileDTO.builder()
                   .id(existingProfile.getId())
                   .clerkId(existingProfile.getClerkId())
                   .email(existingProfile.getEmail())
                   .firstName(existingProfile.getFirstName())
                   .lastName(existingProfile.getLastName())
                   .photoUrl(existingProfile.getPhotoUrl())
                   .credits(existingProfile.getCredits())
                   .createdAt(existingProfile.getCreatedAt())
                   .build();
       }

       return null;

    }

    public void deleteProfile(String clerkId){
       ProfileDocument existingProfile = profileRepository.findByClerkId(clerkId);
       if(existingProfile != null){
           profileRepository.delete(existingProfile);
       }

    }


    public ProfileDocument getCurrentProfile() {
        // Check if there is currently an authenticated user
        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            // If no authentication, throw an exception
            throw new UsernameNotFoundException("User not authenticated");
        }
        // Get the username (or clerkId) of the authenticated user
        String clerkId = SecurityContextHolder.getContext().getAuthentication().getName();
        // Return the profile document associated with the clerkId
        return profileRepository.findByClerkId(clerkId);
    }


}
