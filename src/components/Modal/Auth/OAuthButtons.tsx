import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/clientApp";

const OAuthButtons: React.FC = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button
        mb={2}
        variant="oauth"
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image src="./images/googlelogo.png" height="20px" />
        Continue with Google
      </Button>
      <Button variant="oauth" mb={2}>
        Other provider
      </Button>
      {error && <Text textAlign="center" fontSize="10pt" color="red" mt={2}>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
