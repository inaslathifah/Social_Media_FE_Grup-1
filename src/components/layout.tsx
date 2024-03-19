import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import backgroundSvg from "@/assets/pattern2.png";

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
    <div
      className="w-full h-dvh overflow-auto flex flex-col"
      style={{
        backgroundImage: `url(${backgroundSvg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
