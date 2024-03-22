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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";

import { Link, useNavigate } from "react-router-dom";
import { RegisterType, registerSchema } from "@/utils/apis/auth/type";
import { CustomFormField } from "@/components/custom-formfield";
import { userRegister } from "@/utils/apis/auth/api";
import { toast } from "sonner";

export default function Register() {
  const navigate = useNavigate();

  const form = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      handphone: "",
    },
  });

  async function handleRegister(data: RegisterType) {
    console.log(data);

    try {
      const result = await userRegister(data);
      toast(result.message);
      navigate("/login");
    } catch (error: any) {
      toast((error as Error).message.toString());
    }
  }
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleRegister)}>
            <CardContent className="mt-3">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-2">
                  <CustomFormField
                    control={form.control}
                    name="fullname"
                    label="Fullname"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        className="rounded-full focus-visible:ring-sky-700"
                        placeholder="Fullname"
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
                    name="username"
                    label="Username"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        className="rounded-full focus-visible:ring-sky-700"
                        placeholder="Username"
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
                    name="email"
                    label="Email"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        className="rounded-full focus-visible:ring-sky-700"
                        placeholder="Email"
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
                    name="handphone"
                    label="No.HP"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        className="rounded-full focus-visible:ring-sky-700"
                        placeholder="No. Handphone"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormField>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex">
              <Button className="grow rounded-full bg-sky-700 hover:bg-sky-800">
                Register
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </Layout>
  );
}
