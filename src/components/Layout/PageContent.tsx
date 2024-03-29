import { Flex, Hide } from "@chakra-ui/react";
import React from "react";

type PageContentProps = {
  children: React.ReactNode;
  maxWidth?: string;
};

const PageContent: React.FC<PageContentProps> = ({ children, maxWidth }) => {
  return (
    <Flex justify="center" p="16px 0px">
      <Flex width="95%" justify="center" maxWidth={maxWidth || "860px"}>
        <Flex
          direction="column"
          width={{ base: "100%", md: "65%" }}
          mr={{ base: 0, md: 6 }}
        >
          {children && children[0 as keyof typeof children]}
        </Flex>
        <Hide breakpoint="(max-width: 600px)">
          <Flex direction="column" flexGrow={1}>
            {children && children[1 as keyof typeof children]}
          </Flex>
        </Hide>
      </Flex>
    </Flex>
  );
};
export default PageContent;
