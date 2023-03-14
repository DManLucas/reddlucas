import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width='100%' mb={4}>
      <Button mb={2} variant="oauth">
        <Image src="./images/googlelogo.png" height='20px'/>
        Continue with Google
        </Button>
      <Button variant="oauth" mb={2}>Other provider</Button>
    </Flex>
  );
};
export default OAuthButtons;
