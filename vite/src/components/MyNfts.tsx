import { Grid } from "@chakra-ui/react";
import { FC } from "react";
import MyNftCard from "./MyNftCard";
import { JsonRpcSigner } from "ethers";

interface MyNftsProps {
  signer: JsonRpcSigner | null;
}

const MyNfts: FC<MyNftsProps> = ({ signer }) => {
  return (
    <Grid
      flexGrow={6}
      maxW={768}
      width="full"
      gridTemplateColumns="repeat(3, 1fr)"
      gap={4}
    >
      {signer && (
        <>
          <MyNftCard />
          <MyNftCard />
          <MyNftCard />
          <MyNftCard />
        </>
      )}
    </Grid>
  );
};

export default MyNfts;
