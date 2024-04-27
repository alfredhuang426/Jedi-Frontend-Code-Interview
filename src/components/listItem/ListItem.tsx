import { FC, ReactNode } from "react";

export const ListItem: FC<{ children: ReactNode }> = ({ children }) => {
  return <li className="mt-1">{children}</li>;
};
