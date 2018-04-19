import React from "react";
import Card from "react-ultra-instinct/Card";
import Button from "react-ultra-instinct/Button";

export default () => {
  const image =
    "https://images.pexels.com/photos/880871/pexels-photo-880871.jpeg?w=940&h=650&auto=compress&cs=tinysrgb";

  return (
    <Card bgImage={image} title="React">
      Hi
      <div>
        <Button bgColor="turquoise" borderColor="turquoise" color="black">
          React Docs
        </Button>
      </div>
    </Card>
  );
};
