package in.sunitdas.CloudNest.security;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.math.BigInteger;
import java.net.URL;
import java.security.KeyFactory;
import java.security.PublicKey;
import java.security.spec.RSAPublicKeySpec;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

@Component
public class ClerkJwksProvider {

    @Value("${clerk.jwks-url}")
    private String jwksUrl;

    private final Map<String, PublicKey> keyCache = new HashMap<>();
    private long lastFetchTime = 0;
    private static final long CACHE_TTL = 3600000;

    public PublicKey getPublicKey(String kid) throws Exception{
        if(keyCache.containsKey(kid) && System.currentTimeMillis() - lastFetchTime < CACHE_TTL){
            return keyCache.get(kid);
        }
        refreshKeys();
        return keyCache.get(kid);
    }

    private void refreshKeys() throws Exception {
        // Create a new ObjectMapper used for parsing JSON data
        ObjectMapper mapper = new ObjectMapper();
        // Read and parse the JWKS (JSON Web Key Set) JSON from the given URL (jwksUrl)
        JsonNode jwks = mapper.readTree(new URL(jwksUrl));
        // Extract the "keys" node (array of keys) from the JWKS
        JsonNode keys = jwks.get("keys");
        // Iterate through each key in the "keys" array
        for (JsonNode keyNode : keys) {
            String kid = keyNode.get("kid").asText();
            String kty = keyNode.get("kty").asText();
            String alg = keyNode.get("alg").asText();
            // If the key type is "RSA" and the algorithm is "RS256"
            if ("RSA".equals(kty) && "RS256".equals(alg)) {
                // Extract the modulus (n) and exponent (e) for the RSA public key
                String n = keyNode.get("n").asText();
                String e = keyNode.get("e").asText();
                // Calls a method to create a PublicKey using modulus and exponent
                PublicKey publicKey = createPublicKey(n, e);
                keyCache.put(kid, publicKey);
            }
        }
        lastFetchTime = System.currentTimeMillis();
    }

    private PublicKey createPublicKey(String modulus, String exponent) throws Exception{
        // Decode the modulus from base64url to a byte array
        byte[] modulusBytes = Base64.getUrlDecoder().decode(modulus);
        // Decode the exponent from base64url to a byte array
        byte[] exponentBytes = Base64.getUrlDecoder().decode(exponent);
        // Convert the modulus bytes to BigInteger (use signum 1 for positive number)
        BigInteger modulusBigInt = new BigInteger(1, modulusBytes);
        // Convert the exponent bytes to BigInteger (use signum 1 for positive number)
        BigInteger exponentBigInt = new BigInteger(1, exponentBytes);
        // Create an RSA public key specification with the modulus and exponent
        RSAPublicKeySpec spec = new RSAPublicKeySpec(modulusBigInt, exponentBigInt);
        // Get a KeyFactory instance for RSA keys
        KeyFactory factory = KeyFactory.getInstance("RSA");
        // Generate and return the PublicKey from the specification
        return factory.generatePublic(spec);
    }

}
