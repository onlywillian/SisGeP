import { redirect } from 'next/navigation'

export default function Home() {
  redirect("/home");

  return (
    <main>
      <h1>Redirecionando... </h1>
    </main>
  );
}
