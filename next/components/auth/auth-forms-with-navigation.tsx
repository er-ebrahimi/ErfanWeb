'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';

export function AuthFormsWithNavigation() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const router = useRouter();

  const handleSuccess = () => {
    router.push('/dashboard');
  };

  const handleSwitchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {mode === 'login' ? (
        <LoginForm
          onSuccess={handleSuccess}
          onSwitchToRegister={handleSwitchMode}
        />
      ) : (
        <RegisterForm
          onSuccess={handleSuccess}
          onSwitchToLogin={handleSwitchMode}
        />
      )}
    </div>
  );
}
