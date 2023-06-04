import React from "react";
import { LOGO } from "../assets/index";
import Image from "next/image";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="header">
      <Image src={LOGO} alt="ab-imbev" height={60} />
    </header>
  );
};
