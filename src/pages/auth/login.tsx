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
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginType, loginSchema } from "@/utils/apis/auth/type";
import { CustomFormField } from "@/components/custom-formfield";
import { userLogin } from "@/utils/apis/auth/api";
import { useToken } from "@/utils/contexts/token";
import { toast } from "sonner";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { changeToken } = useToken();

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleLogin(data: LoginType) {
    try {
      const result = await userLogin(data);
      toast(result.message);
      changeToken(result.data.token);
      navigate("/");
    } catch (error: any) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Layout navBlue centerX centerY containerTranparant>
      <Card className="w-full lg:w-2/3">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl">Login</CardTitle>
          <CardDescription>
            Belum punya akun?
            <Link to="/register" className="text-sky-500 font-medium">
              {" "}
              Daftar di sini
            </Link>
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)}>
            <CardContent className="mt-3">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-2">
                  <CustomFormField
                    control={form.control}
                    name="email"
                    label="Username / Email / No.HP"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        className="rounded-full focus-visible:ring-sky-700"
                        placeholder="Username / Email / No. HP"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormField>
                </div>
                <div className="flex flex-col space-y-2">
                  <CustomFormField
                    control={form.control}
                    name="password"
                    label="Password"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        className="rounded-full focus-visible:ring-sky-700"
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormField>
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
            </CardContent>
            <CardFooter className="flex">
              <Button
                type="submit"
                className="grow rounded-full bg-sky-700 hover:bg-sky-800"
              >
                Login
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </Layout>
  );
}
