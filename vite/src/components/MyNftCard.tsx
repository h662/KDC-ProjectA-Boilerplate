import { GridItem, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const MyNftCard: FC = () => {
  return (
    <GridItem bgColor="gray.100" h="fit-content" pb={4} rounded="lg">
      <Image
        roundedTop="lg"
        src="/images/unrevealed.png"
        alt="unrevealed image"
      />
      <Text textAlign="center" fontSize="xl" fontWeight="semibold">
        Lion NFT
      </Text>
      <Text textAlign="center">어떤 NFT가 나올까요?</Text>
    </GridItem>
  );
};

export default MyNftCard;
