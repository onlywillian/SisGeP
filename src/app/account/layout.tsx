import { ToastContainerComponent } from "@/components/Notifications";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-screen">
      <ToastContainerComponent />
      {children}
    </main>
  );
}
