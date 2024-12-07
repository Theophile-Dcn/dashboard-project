import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}
