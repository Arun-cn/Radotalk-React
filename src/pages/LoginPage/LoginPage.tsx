import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "@/features/auth/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="bg-secondary w-full  h-screen flex justify-center items-top sm:items-center">
      <Card className="w-96 max-h-120 gap-0 mt-7 sm:mt-0">
        <CardHeader className="mb-0.5">
          <CardTitle>Login</CardTitle>
          <CardDescription>to get started</CardDescription>
        </CardHeader>
        <CardContent className="mt-0">
          <LoginForm />
        </CardContent>
        <CardFooter>
          <p className="text-[12px] pl-1">New User?</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
