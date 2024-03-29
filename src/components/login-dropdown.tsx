import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToken } from "@/utils/contexts/token";
import { Home, Settings, LogOut, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function LoginDropdown() {
  const { changeToken, user } = useToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    changeToken();
    toast("Logout successfully");
    navigate("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="border-1 border-white">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 p-2" align="end">
        <DropdownMenuLabel>@{user?.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to="/profile">
          <DropdownMenuItem>
            <User className="w-5 text-slate-800" />
            <p className="ms-2">Profile</p>
          </DropdownMenuItem>
        </Link>
        <Link to="/">
          <DropdownMenuItem>
            <Home className="w-5 text-slate-800" />
            <p className="ms-2">Home</p>
          </DropdownMenuItem>
        </Link>
        <Link to="/edit-profile">
          <DropdownMenuItem>
            <Settings className="w-5 text-slate-800" />
            <p className="ms-2">Edit Profile</p>
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="focus:text-red-600 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut className="w-5 text-slate-800" />
          <p className="ms-2">Logout</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
