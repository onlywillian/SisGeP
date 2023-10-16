import Aside from "@/components/Aside";
import { ToastContainerComponent } from "@/components/Notifications";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = cookies().get("nextAuth.token");

  if (!token) {
    redirect("/account/login"); 
  }
  
  return (
    <main className="flex h-screen">
      <Aside />
      <ToastContainerComponent />
      {children}
    </main>
  );
}
