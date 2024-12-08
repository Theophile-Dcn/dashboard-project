'use client';

import { signIn } from 'next-auth/react';

export default function HomePage() {
  return (
    <div>
      <h1>Vanventure login</h1>
      <button onClick={() => signIn('google', { callbackUrl: '/dashboard' })}>
        Connexion
      </button>
    </div>
  );
}
