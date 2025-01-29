import React from 'react';
import '../styles/globals.css'
import { Button } from '@/components/ui/Button'
export default function Home() {
  return (
    <div className='container'>
      <h1 className='text-3xl font-bold underline'>Hello, Next.js!</h1>
      <Button>Click me</Button>
    </div>
  );
}
