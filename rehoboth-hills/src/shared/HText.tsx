import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 font-haskoy text-5xl font-medium text-secondary-500 leading-normal -tracking-[1.92px] ">{children}</h1>
  );
};

export default HText;
