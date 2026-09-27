// app/page.tsx
'use client';
import { useState } from 'react';
import FourColumnPortal from '@/app/components/FourColumnPortal';

export default function Page() {
  const [statusMsg, setStatusMsg] = useState('');

  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <FourColumnPortal 
        onUnlockSuperUser={(key) => setStatusMsg(`Clave intentada: ${key}`)}
        superUserStatusMsg={statusMsg}
        onNavigateToRegister={() => alert('Navegando a registro...')}
        registeredUsersCount={8}
      />
    </main>
  );
}