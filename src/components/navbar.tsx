import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Props {
  withUser?: boolean;
  bgBlue?: boolean;
}

export default function Navbar(props: Props) {
  const { withUser, bgBlue } = props;

  return (
    <nav
      className={cn(
        "w-full flex justify-center sticky top-0",
        bgBlue && "bg-sky-700 text-white"
      )}
    >
      <div className="w-10/12 flex justify-between items-center py-4">
        <h1 className="text-lg font-bold tracking-wide">App Name</h1>
        {withUser ? (
          <Avatar className="border-1 border-white">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
