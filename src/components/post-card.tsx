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
import { CommentType, commentSchema } from "@/utils/apis/comment/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { CustomFormField } from "./custom-formfield";

interface Types {
  postID: number;
  username: string;
  caption: string;
  time: string;
  imgUrl?: string;
  withOption?: boolean;
  withInputComment?: boolean;
  onComment: (data: CommentType) => void;
  onDelete: (postID: number) => Promise<void>;
  // onUpdate: (body: createPostType, postID: number) => void;
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
    onComment,
    onDelete,
    // onUpdate,
  } = props;

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);

  const form = useForm<CommentType>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      post_id: "",
      comment: "",
    },
  });

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
          <p className="text-lg font-medium">@{username}</p>
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
                <Link to={`post/${postID}`}>
                  <MessageCircle className="w-5 text-sky-700" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Comments</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {withInputComment ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onComment)}>
              <div className="w-full flex">
                <CustomFormField control={form.control} name="comment" label="">
                  {(field) => (
                    <Input
                      {...field}
                      className="rounded-full border-slate-400 focus-visible:ring-sky-700 "
                      placeholder="Add a comment"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      value={field.value as string}
                    />
                  )}
                </CustomFormField>
                <Button className="mt-2 border-none bg-transparent hover:bg-transparent text-black">
                  Send
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <></>
        )}
      </CardContent>

      <EditPost
        caption={caption}
        open={showEditDialog}
        onOpenChange={setShowEditDialog}
        onSubmit={() => {
          // onUpdate({ imgUrl: Image, caption: string }, postID);
          setShowEditDialog(false);
        }}
      />

      <Alert
        open={showDeleteDialog}
        title="Kamu Yakin Menghapus Postingan Ini?"
        description="Ini akan menghapus postingan dan tidak dapat dibalik kembali."
        onAction={async () => {
          try {
            await onDelete(postID);
            setShowDeleteDialog(false);
          } catch (error) {}
        }}
        onCancel={() => {
          setShowDeleteDialog(false);
        }}
      />
    </Card>
  );
}
