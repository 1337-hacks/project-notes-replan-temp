import Link from 'next/link';

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}