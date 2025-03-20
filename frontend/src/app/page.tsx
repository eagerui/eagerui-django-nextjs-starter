'use client';

import { useState, useEffect } from 'react';
import api from './api/axios';

export default function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    api.get('/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => {
        console.log(error);
        setMessage('Error loading data')
      } );
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">Next.js + Django Starter</h1>
        <p className="text-xl">{message}</p>
      </div>
    </main>
  );
}