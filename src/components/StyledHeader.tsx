import React, { ReactNode } from "react";

function StyledHeader({
  title,
  singleLine = false,
  main = false,
  className = "",
}: {
  title: string | ReactNode;
  singleLine?: boolean;
  main?: boolean;
  className?: string;
}) {
  return !main ? (
    <h5
      className={`mb-3 flex items-center gap-4 text-base font-semibold uppercase text-primary md:mb-7 md:text-base md:tracking-[5px] ${className}`}
    >
      {singleLine && <div className="h-[1px] w-[50px] bg-primary"></div>}{" "}
      {title ?? ""}
    </h5>
  ) : (
    <h5
      className={` li mb-3  text-2xl font-bold  text-black   md:mb-7  md:text-4xl ${className}`}
    >
      {title ?? ""}
    </h5>
  );
}

export default StyledHeader;
