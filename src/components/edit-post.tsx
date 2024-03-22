import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { createPostSchema, createPostType } from "@/utils/apis/post/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import { CustomFormField } from "./custom-formfield";

interface Props {
  caption: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: any) => void;
  // onSubmit: (data: createPostType, postID: number) => void;
}

export function EditPost(props: Props) {
  const { caption, open, onOpenChange, onSubmit } = props;

  const form = useForm<createPostType>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      image: new File([], ""),
      caption: "",
    },
  });

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Post</DialogTitle>
              <DialogDescription>
                Edit the content of your post.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center gap-4">
                <CustomFormField
                  control={form.control}
                  name="image"
                  label="Image"
                >
                  {(field) => (
                    <Input
                      {...field}
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      multiple={false}
                      className="col-span-3"
                      placeholder="Type your caption here..."
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      onChange={(e) =>
                        field.onChange(
                          e.target.files ? e.target.files[0] : null
                        )
                      }
                      value=""
                    />
                  )}
                </CustomFormField>
              </div>
              <div className="grid items-center gap-4">
                <CustomFormField
                  control={form.control}
                  name="caption"
                  label="Caption"
                >
                  {(field) => (
                    <Textarea
                      {...field}
                      className="col-span-3 min-h-[100px] max-h-[100px]"
                      placeholder="Type your caption here..."
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      value={field.value as string}
                      defaultValue={caption}
                    />
                  )}
                </CustomFormField>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Form>
    </Dialog>
  );
}
