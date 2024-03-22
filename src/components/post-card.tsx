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
import { EditPost } from "./edit-post";
import Alert from "./alert";
import { useState } from "react";

import dayjs from "dayjs";

interface Types {
  postID: number;
  username: string;
  caption: string;
  time: string;
  imgUrl?: string;
  withOption?: boolean;
  withInputComment?: boolean;
}

export default function PostCard(props: Types) {
  const {
    username,
    caption,
    time,
    withOption,
    imgUrl,
    withInputComment,
    postID,
  } = props;

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);

  return (
    <Card className="w-full p-2 text-sm rounded-xl bg-white border border-sky-300 shadow-md shadow-slate-300 mb-5">
      <Link to={`post/${postID}`}>
        <CardContent className="p-2 text-xs">
          {withOption ? (
            <>
              <div className="w-full flex justify-end">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Ellipsis />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setShowEditDialog(true)}>
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-red-600"
                      onClick={() => setShowDeleteDialog(true)}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="w-full mb-2">
                <p className="text-[0.7rem] font-ligh text-slate-500 tracking-wide">
                  {dayjs(time).format("HH:MM - DD MMMM YYYY")}
                </p>
              </div>
              <div className="w-full mb-2">
                <p className="text-base tracking-wide text-slate-800 leading-5 text-start">
                  {caption}
                </p>
              </div>
              <div className="w-full mb-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <MessageCircle className="w-5 text-sky-700" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Comments</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </>
          ) : (
            <></>
          )}
        </CardContent>
      </Link>
      <EditPost
        open={showEditDialog}
        onOpenChange={setShowEditDialog}
        onSubmit={() => {
          // Pemanggilan API PUT Post
          setShowEditDialog(false);
        }}
      />
      <Alert
        open={showDeleteDialog}
        title="Kamu Yakin Menghapus Postingan Ini?"
        description="Ini akan menghapus postingan dan tidak dapat dibalik kembali."
        onAction={() => {}}
        onCancel={() => {
          setShowDeleteDialog(false);
        }}
      />
    </Card>
  );
}
