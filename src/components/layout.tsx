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
  navBlue?: boolean;
  containerTranparant?: boolean;
}

export default function Layout(props: Props) {
  const { children, centerX, centerY, withUser, navBlue, containerTranparant } =
    props;

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
      <Navbar withUser={withUser} navBlue={navBlue} />
      <div
        className={cn(
          "container lg:w-1/2 md:w-2/3 w-full grow py-4 px-8 flex flex-col bg-white",
          centerX && "items-center",
          centerY && "justify-center",
          containerTranparant && "bg-transparent"
        )}
      >
        {children}
      </div>

      <Footer />
    </div>
  );
}
