import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface Props {
  children: ReactNode;
  centerX?: boolean;
  centerY?: boolean;
  withUser?: boolean;
  bgBlue?: boolean;
}
export default function Layout(props: Props) {
  const { children, centerX, centerY, withUser, bgBlue } = props;

  return (
    <div className="w-full h-dvh overflow-auto flex flex-col">
      <Navbar withUser={withUser} bgBlue={bgBlue} />
      <div
        className={cn(
          "container grow py-4 px-8 flex flex-col",
          centerX && "items-center",
          centerY && "justify-center"
        )}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
}
