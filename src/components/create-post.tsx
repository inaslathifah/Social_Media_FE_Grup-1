import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createPostSchema, createPostType } from "@/utils/apis/post/type";
import { CustomFormField } from "./custom-formfield";
import { Textarea } from "./ui/textarea";

interface Props {
  onsubmit: (data: createPostType) => void;
}

export default function CreatePost(props: Props) {
  const { onsubmit } = props;

  const form = useForm<createPostType>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      image: new File([], ""),
      caption: "",
    },
  });

  return (
    <div className="w-full mb-8">
      <p className="font-medium mb-2">Create Post</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)}>
          <div>
            <CustomFormField control={form.control} name="caption" label="">
              {(field) => (
                <Textarea
                  {...field}
                  className="w-full min-h-[100px] max-h-[100px] py-1 px-2 border-2 border-sky-500 rounded-md"
                  placeholder="Type your caption here..."
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                  value={field.value as string}
                />
              )}
            </CustomFormField>
            <div className="flex justify-between mt-3">
              <CustomFormField control={form.control} name="image" label="">
                {(field) => (
                  <Input
                    {...field}
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    multiple={false}
                    className="w-1/2"
                    placeholder="Type your caption here..."
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    onChange={(e) =>
                      field.onChange(e.target.files ? e.target.files[0] : null)
                    }
                    value=""
                  />
                )}
              </CustomFormField>
              <Button className="bg-sky-700 hover:bg-sky-800">
                Send <SendHorizonal className="w-4 ms-2" />
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
