package in.sunitdas.CloudNest.config;

import in.sunitdas.CloudNest.security.ClerkJwtAuthFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@EnableWebSecurity
@RequiredArgsConstructor
@Configuration
public class SecurityConfig {

    private final ClerkJwtAuthFilter clerkJwtAuthFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{
        httpSecurity.cors(Customizer.withDefaults())
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth.requestMatchers("/api/webhooks/**").
                        permitAll().anyRequest().authenticated())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(clerkJwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return httpSecurity.build();
    }

    // Marks this method as a Bean so Spring will manage it and inject it where needed
    @Bean
    public CorsFilter corsFilter() {
        // Calls the helper method that sets up the CORS configuration source, passes it to the CorsFilter
        return new CorsFilter(corsConfigurationSource());
    }

    // Creates and configures the CORS policy for the application
    private UrlBasedCorsConfigurationSource corsConfigurationSource() {
        // Create a new CORS configuration object
        CorsConfiguration config = new CorsConfiguration();
        // Allow all origins to access the API (wildcard "*")
        config.setAllowedOrigins(List.of("*"));
        // Allow only these HTTP methods from remote clients
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        // Allow specific headers in requests (for example, Authorization and Content-Type)
        config.setAllowedHeaders(List.of("Authorization", "Content-Type"));
        // Allow sending credentials (such as cookies or HTTP authentication)
        config.setAllowCredentials(true);
        // Create a source object that maps URL patterns to CORS configurations
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        //Registers the CORS configuration for all endpoints (/** means every path)
        source.registerCorsConfiguration("/**", config);
        return source;
    }

}
