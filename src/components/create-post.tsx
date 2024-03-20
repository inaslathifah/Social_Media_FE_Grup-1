import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SendHorizonal } from "lucide-react";

export default function CreatePost() {
  return (
    <div className="w-full mb-8">
      <p className="font-medium mb-2">Create Post</p>
      <div>
        <textarea
          className="w-full min-h-[100px] max-h-[100px] py-1 px-2 border-2 border-sky-500 rounded-md"
          placeholder="Type your caption here..."
        />
        <div className="flex justify-between mt-3">
          <Input type="file" className="w-1/2" />
          <Button className="bg-sky-700 hover:bg-sky-800">
            Send <SendHorizonal className="w-4 ms-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
