import React, {useState} from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ProtectedRoute from '@/components/ProtectedRoute';

const ReactQuill = dynamic(import('react-quill'), { ssr: false })

export default function Workspace() {

  const [value, setValue] = useState('');
  
  return (
    <>
      <ProtectedRoute>
        <h1>Workspace</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </ProtectedRoute>
    </>
  );
}
