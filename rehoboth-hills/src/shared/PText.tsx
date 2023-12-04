import React from "react";

type Props = {
  children: React.ReactNode;
};

const PText = ({ children }: Props) => {
  return (
    <p className="basis-3/5 font-haskoy text-[16px] font-light">{children}</p>
  );
};

export default PText;
