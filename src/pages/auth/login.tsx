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
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Layout withUser bgBlue centerX centerY>
      <Card className="w-full md:w-2/3 lg:w-1/3">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Login</CardTitle>
          <CardDescription>
            Belum punya akun?
            <a href="#" className="text-sky-500 font-medium">
              {" "}
              Daftar di sini
            </a>
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-3">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  className="rounded-full focus-visible:ring-sky-700"
                  id="username"
                  placeholder="Username / Email / No. HP"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="rounded-full focus-visible:ring-sky-700"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <div className="items-top flex space-x-2">
                  <Checkbox
                    id="show-password"
                    checked={showPassword}
                    onCheckedChange={(checked: boolean) =>
                      setShowPassword(checked)
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="show-password"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Show Password
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex">
          <Button className="grow rounded-full bg-sky-700 hover:bg-sky-800">
            Login
          </Button>
        </CardFooter>
      </Card>
    </Layout>
  );
}
