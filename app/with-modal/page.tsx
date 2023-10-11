import Link from "next/link";

const photos = repeat(10, (i) => ({ id: i, title: `Pic #${i}` }));

export default function Home() {
  return (
    <main className="">
      <h1>Gram</h1>
      <nav>
        <Link href="/upload">Upload</Link>
      </nav>
      <ul>
        {photos.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/photo/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

function repeat<T>(times: number, gen: (index: number) => T): T[] {
  const array = new Array(times);

  for (let i = 0; i < times; i++) {
    array[i] = gen(i);
  }

  return array;
}
