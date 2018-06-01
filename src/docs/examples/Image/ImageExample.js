import React from "react";
import Image from "react-ultra-instinct/Image";
import Box from "react-ultra-instinct/Box";

export default () => {
  return (
    <Box direction={"row"} justifyContent="space-between">
      <Image
        src={`https://picsum.photos/500/300/?random`}
        caption="randomImage"
      />
      <Image
        src={`https://picsum.photos/500/400/?random`}
        caption="random Image"
      />
      <Image src={`https://picsum.photos/500/400/?random`} />
    </Box>
  );
};
