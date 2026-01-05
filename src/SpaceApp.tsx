import type { ReactNode } from "react";
import { Header } from "./components";

interface Props {
  children: ReactNode;
}
export const SpaceApp = ({ children }: Props) => {
  return (
    <div className="app-container flex flex-col h-screen w-screen text-gray-50 bg-black">
      <Header />
      <main className="content flex-1 sm:flex">{children}</main>
    </div>
  );
};
