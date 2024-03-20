import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, Home, Settings, LogOut } from "lucide-react";

import { cn } from "@/lib/utils";

interface Props {
  withUser?: boolean;
  navBlue?: boolean;
}

export default function Navbar(props: Props) {
  const { withUser, navBlue } = props;

  return (
    <nav
      className={cn(
        "w-full flex justify-center sticky top-0",
        navBlue && "bg-sky-700 text-white"
      )}
    >
      <div className="w-10/12 flex justify-between items-center py-4">
        <h1 className="text-lg font-bold tracking-wide">App Name</h1>
        {withUser ? (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="border-1 border-white">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40 p-2" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="w-5 text-slate-800" />
                <p className="ms-2">Profile</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Home className="w-5 text-slate-800" />
                <p className="ms-2">Home</p>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="w-5 text-slate-800" />
                <p className="ms-2">Edit Profile</p>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="focus:text-red-600">
                <LogOut className="w-5 text-slate-800" />
                <p className="ms-2">Logout</p>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
