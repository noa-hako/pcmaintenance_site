import React from "react";
import Image from "next/image";

export default function Fview() {
  return (
    <Image
      src="/pc_photo.jpeg"
      alt="ファーストビュー"
      width={1100}
      height={600}
    />
  );
}
