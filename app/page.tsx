'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export default function Home() {
  const [status, setStatus] = useState('Connecting to Supabase...');

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from('user_progress').select('*').limit(1);
      if (error) {
        setStatus(`Connected, but table check note: ${error.message}`);
      } else {
        setStatus('Successfully connected to Supabase backend! 🚀');
      }
    }
    testConnection();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-950 via-slate-900 to-black text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
          Femiria-app
        </h1>
        <p className="text-slate-300 mb-6">
          Your Next.js & Supabase application is live on mobile!
        </p>
        <div className="bg-black/40 rounded-xl p-4 border border-white/10 text-sm text-pink-300">
          {status}
        </div>
      </div>
    </main>
  );
}
