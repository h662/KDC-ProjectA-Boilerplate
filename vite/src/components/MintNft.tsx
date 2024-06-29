import { Button, Flex, Image } from "@chakra-ui/react";
import { JsonRpcSigner } from "ethers";
import { FC } from "react";

interface MintNftProps {
  signer: JsonRpcSigner | null;
}

const MintNft: FC<MintNftProps> = ({ signer }) => {
  return (
    <Flex
      flexGrow={1}
      width="full"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      gap={4}
      my={8}
    >
      <Image src="/images/lion.gif" alt="lion nft" w={196} />
      {signer && <Button colorScheme="green">민팅</Button>}
    </Flex>
  );
};

export default MintNft;
