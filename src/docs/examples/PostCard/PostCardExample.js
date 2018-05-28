import React from "react";
import PostCard from "react-ultra-instinct/PostCard";

const imageUrl =
  "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8ab2656cca1f3fadd0cc4e254b27c8d&auto=format&fit=crop&w=1351&q=80";

export default function PostCardExample() {
  return (
    <PostCard
      width="600px"
      height="400px"
      color="purple"
      imageUrl={imageUrl}
      topText="lorem"
      bottomText="ipsum dolor"
    />
  );
}
