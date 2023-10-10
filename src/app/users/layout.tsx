import Aside from "@/components/Aside";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) 
{
  const token = cookies().get("nextAuth.token");

  if (!token) {
    redirect("/account/login");
  }
  
  return (
    <main className="flex h-screen">
      <Aside />
      {children}
    </main>
  );
}
