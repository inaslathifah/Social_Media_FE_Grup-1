import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

export default function NoLoginDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="border-1 border-white">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 p-2" align="end">
        <Link to="/login">
          <DropdownMenuItem>
            <LogIn className="w-5 text-slate-800" />
            <p className="ms-2">Login</p>
          </DropdownMenuItem>
        </Link>
        <Link to="/register">
          <DropdownMenuItem>
            <UserPlus className="w-5 text-slate-800" />
            <p className="ms-2">Register</p>
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
