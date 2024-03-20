import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { MessageCircle, Ellipsis } from "lucide-react";
import { Link } from "react-router-dom";

interface Types {
  withOption?: boolean;
  imgUrl?: string;
}

export default function PostCard(props: Types) {
  const { withOption, imgUrl } = props;

  return (
    <Card className="w-full p-2 text-sm rounded-xl bg-white border border-sky-300 shadow-md shadow-slate-300 mb-5">
      <CardContent className="p-2 text-xs">
        {withOption ? (
          <div className="w-full flex justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Ellipsis />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <></>
        )}

        {imgUrl ? (
          <div className="w-full my-2">
            <img src={imgUrl} alt="Image" className="rounded-md object-cover" />
          </div>
        ) : (
          <></>
        )}

        <div className="w-full">
          <p className="text-lg font-medium">@john_doe</p>
        </div>
        <div className="w-full mb-2">
          <p className="text-[0.7rem] font-ligh text-slate-500 tracking-wide">
            20:20 - 15 March 2024
          </p>
        </div>
        <div className="w-full mb-2">
          <p className="text-base tracking-wide text-slate-800 leading-5 text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis atque quo delectus placeat maiores culpa aspernatur
            unde mollitia assumenda, ipsam voluptatum voluptas neque numquam
            explicabo, consequatur ad possimus accusantium dolore!
          </p>
        </div>
        <div className="w-full mb-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Link to="/post/">
                  <MessageCircle className="w-5 text-sky-700" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Comments</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="w-full flex ">
          <Input
            className="rounded-full border-slate-400 focus-visible:ring-sky-700 focus-visible:border-white"
            placeholder="Add a comment"
          />
          <Button className="border-none bg-transparent hover:bg-transparent text-black">
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
