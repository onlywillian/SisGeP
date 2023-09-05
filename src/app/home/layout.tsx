import Aside from "../components/Aside";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <Aside />
      {children}
    </main>
  );
}
