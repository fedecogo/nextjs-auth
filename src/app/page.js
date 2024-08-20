import { fetchAuthUserAction } from "@/actions";
import Logout from "@/components/log-out/page";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function Home() {
  const currentUser = await fetchAuthUserAction();

  if (!currentUser?.success) {
    redirect("/sign-in");
  }
  const cookieStore = cookies();
  const token = cookieStore.get("token"); 

  return (
    <div className="text-center mt-5">
      <h1>Next JS Authentication</h1>
      <h2 className="mt-5">Benvenuto {currentUser?.data?.userName}</h2>
      <p>Ecco il tuo token salvato nei cookie: {token?.value}</p>
      <p className="mt-5 mb-5">Ed ecco la password salvata nel db con bcrypt: {currentUser?.data?.password}</p>
      <Logout />
    </div>
  );
}
