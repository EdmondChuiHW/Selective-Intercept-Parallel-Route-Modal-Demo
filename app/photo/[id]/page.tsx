import Link from "next/link";

export default function PhotoDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return (
    <section>
      <h1>PhotoDetailsPage</h1>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <h2>ID: {id}</h2>
    </section>
  );
}
