import Aside from "@/components/Aside";
import { ToastContainerComponent } from "@/components/Notifications";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen">
      <Aside />
      <ToastContainerComponent />
      {children}
    </main>
  );
}
