import { Flex, Hide } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
};

const PageContent: React.FC<PageContentProps> = ({ children }) => {
  return (
    <Flex justify="center" p="16px 0px" border="1px solid red">
      <Flex
        width="95%"
        justify="center"
        maxWidth="860px"
        border="1px solid green"
      >
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
          border="1px solid blue"
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        <Hide breakpoint="(max-width: 600px)">
          <Flex
            direction="column"
            flexGrow={1}
            border="1px solid orange"
          >
            {children && children[1 as keyof typeof children]}
          </Flex>
        </Hide>
      </Flex>
    </Flex>
  );
};
export default PageContent;
