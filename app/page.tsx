import React from 'react';
import { Button } from '@/components/ui/Button';
import "@/styles/globals.css";
export default function Home() {
  return (
    <div className='container'>
      <h1 className='text-3xl font-bold underline'>Hello, Next.js!</h1>
      <Button>Click me</Button>
    </div>
  );
}
