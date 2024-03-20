import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import LoginDropdown from "./login-dropdown";
import { useToken } from "@/utils/contexts/token";
import NoLoginDropdown from "./no-login-dropdown";

interface Props {
  withUser?: boolean;
  navBlue?: boolean;
}

export default function Navbar(props: Props) {
  const { withUser, navBlue } = props;
  const { token } = useToken();

  return (
    <nav
      className={cn(
        "w-full flex justify-center sticky top-0",
        navBlue && "bg-sky-700 text-white"
      )}
    >
      <div className="w-10/12 flex justify-between items-center py-4">
        <Link to="/">
          <h1 className="text-lg font-bold tracking-wide">App Name</h1>
        </Link>
        {withUser ? (
          <>{token ? <LoginDropdown /> : <NoLoginDropdown />}</>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
}
