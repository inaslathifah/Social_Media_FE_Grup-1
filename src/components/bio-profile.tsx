import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function BioProfile() {
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
        <p className="text-lg font-medium">John Doe</p>
        <p className="text-sm text-muted-foreground my-1">
          Ini bio John Doe Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Assumenda minus mollitia omnis placeat officia nihil soluta
          ipsum pariatur nesciunt eveniet.
        </p>
        <p>10 Post</p>
      </div>
    </div>
  );
}
