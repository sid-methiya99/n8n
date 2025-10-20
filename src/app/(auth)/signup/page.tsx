import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnAuth } from "@/lib/auth-utils";

export default async function SignUp() {
  await requireUnAuth();
  return (
    <div className="">
      <RegisterForm />
    </div>
  );
}
