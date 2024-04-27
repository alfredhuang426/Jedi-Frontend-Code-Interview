import { FC, ReactNode } from "react";

export const Article: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="mt-6 border-t pt-6">
      <h2 className="text-xl font-bold">{title}</h2>
      {children}
    </div>
  );
};
