import { FC, ReactNode } from "react";

export const List: FC<{ children: ReactNode }> = ({ children }) => {
  return <ul className="list-decimal pl-6">{children}</ul>;
};
