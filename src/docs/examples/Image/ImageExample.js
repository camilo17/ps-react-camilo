import React from "react";
import Image from "react-ultra-instinct/Image";
import Box from "react-ultra-instinct/Box";

export default () => {
  return (
    <Box direction={"column"}>
      <Image
        alt={"Skyline photo"}
        src={`https://cdn.pixabay.com/photo/2018/01/27/23/46/waters-3112508_960_720.jpg`}
      />
      <Image
        alt={"Skyline photo"}
        src={`https://cdn.pixabay.com/photo/2018/01/27/23/46/waters-3112508_960_720.jpg`}
      />
    </Box>
  );
};
