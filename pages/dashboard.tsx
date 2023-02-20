import Link from 'next/link';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function Dashboard() {
  return (
    <>
      <ProtectedRoute>
        <h1>Dashboard</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </ProtectedRoute>
    </>
  );
}