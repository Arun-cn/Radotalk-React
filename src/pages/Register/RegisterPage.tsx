import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./../../components/ui/card";
import RegisterForm from "@/components/form/registerForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-96 max-h-auto gap-0 mt-7 sm:mt-0 d-flex   ">
        <CardHeader className="mb-0.5">
          <CardTitle>Register</CardTitle>
          <CardDescription>to get started</CardDescription>
        </CardHeader>
        <CardContent className="mt-0">
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
