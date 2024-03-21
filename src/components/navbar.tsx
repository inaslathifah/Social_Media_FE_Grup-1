
import { cn } from "@/lib/utils";

interface Props {
  withUser?: boolean;
  bgBlue?: boolean;
}

export default function Navbar(props: Props) {
  const { bgBlue } = props;

  return (
    <nav
      className={cn(
        "w-full flex justify-center sticky top-0",
        bgBlue && "bg-sky-700 text-white"
      )}
    >
      <div className="w-10/12 flex justify-between items-center py-4">
        <h1 className="text-lg font-bold tracking-wide">App Name</h1>
      </div>
    </nav>
  );
}
