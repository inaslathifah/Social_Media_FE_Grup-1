import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  fullname?: string;
  username?: string;
  biodata?: string;
  totalPost: number;
}

export function BioProfile(props: Props) {
  const { fullname, username, biodata, totalPost } = props;
  return (
    <div className="w-full flex justify-between items-center gap-6 mb-10">
      <div className="w-1/3">
        <Avatar className="w-full h-full">
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="border-full"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
      <div className="w-full ">
        <p className="text-lg font-medium">{fullname}</p>
        <p className="text-lg font-medium">@{username}</p>
        <p className="text-sm text-muted-foreground my-1">{biodata}</p>
        <p>{totalPost} Post</p>
      </div>
    </div>
  );
}
