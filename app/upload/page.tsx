import Link from "next/link";

export default function UploadPage() {
  return (
    <section>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <h1>Upload</h1>
      <Link href="/photo/uploaded">Submit</Link>
    </section>
  );
}
