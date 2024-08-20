import { fetchAuthUserAction } from "@/actions";
import Logout from "@/components/log-out/page";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();

  console.log(currentUser);
  if (!currentUser?.success) redirect("/sign-in");

  return (
    <div className="text-center mt-5">
      <h1>Next JS Authentication</h1>
      <h2 className="mt-5">Benvenuto {currentUser?.data?.userName}</h2>
      <p className="mb-5">La password salvata a db con bcrypt: {currentUser?.data?.password}</p>
      <Logout />
    </div>
  );
}