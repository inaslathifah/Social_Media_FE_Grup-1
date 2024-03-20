import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <Layout navBlue centerX centerY containerTranparant>
      <Card className="w-full lg:w-2/3">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Register</CardTitle>
          <CardDescription>
            Sudah punya akun?
            <Link to="/login" className="text-sky-500 font-medium">
              {" "}
              Login di sini
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-3">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="fullname">Fullname</Label>
                <Input
                  className="rounded-full focus-visible:ring-sky-700"
                  id="fullname"
                  placeholder="Fullname"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  className="rounded-full focus-visible:ring-sky-700"
                  id="username"
                  type="username"
                  placeholder="Username"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="rounded-full focus-visible:ring-sky-700"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="rounded-full focus-visible:ring-sky-700"
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="nohp">No Handphone</Label>
                <Input
                  className="rounded-full focus-visible:ring-sky-700"
                  id="nohp"
                  type="nohp"
                  placeholder="No Handphone"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex">
          <Button className="grow rounded-full bg-sky-700 hover:bg-sky-800">
            Register
          </Button>
        </CardFooter>
      </Card>
    </Layout>
  );
}
