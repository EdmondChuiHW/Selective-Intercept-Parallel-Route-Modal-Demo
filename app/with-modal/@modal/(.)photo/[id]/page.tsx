import Link from "next/link";

export default function InlinePhotoDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  return (
    <section>
      <h1>InlinePhotoDetailsPage</h1>
      <nav>
        <Link href="/" replace>Back</Link>
      </nav>
      <h2>ID: {id}</h2>
    </section>
  );
}