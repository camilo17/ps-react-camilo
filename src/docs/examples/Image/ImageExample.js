import React from "react";
import Image from "react-ultra-instinct/Image";
import Box from "react-ultra-instinct/Box";

export default () => {
  return (
    <Box direction={"row"} justifyContent="space-between">
      <Image
        alt={"Skyline photo"}
        src={`https://cdn.pixabay.com/photo/2016/03/09/15/13/water-1246527_960_720.jpg`}
        width={"100%"}
      />
      <Image
        alt={"Skyline photo"}
        src={`https://cdn.pixabay.com/photo/2018/01/27/23/46/waters-3112508_960_720.jpg`}
        width={"100%"}
      />
    </Box>
  );
};
