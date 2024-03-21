import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";

export function BioProfile () {
    return (
            <div className = "flex space-x-4">
                
                    <div className="bg-white">
                        <Avatar
                            style={{ width: "100px", height: "100px", borderRadius: "50px", overflow: "hidden" }}
                            className="border-1 border-white"
                        >
                            <AvatarImage src="https://github.com/shadcn.png" className="border-full"/>
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex-1">
                        <div className="h-full">
                        <h4 className="text-sm font-medium leading-none">
                            John Doe
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Ini bio John Doe 
                        </p>
                        <div className="flex h-5 items-center space-x-4 text-sm">
                            <div>10 Post</div>
                        </div>
                        </div>
                    </div>
            <Separator className="my-4"/>
        </div>
    );
}