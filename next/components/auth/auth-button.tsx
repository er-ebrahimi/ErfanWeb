'use client';

import React, { useState } from 'react';

import { AuthModal } from './auth-modal';
import { Button } from '@/components/elements/button';
import { useAuth } from '@/context/auth-context';

export function AuthButton() {
  const { user, logout, isLoading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (isLoading) {
    return (
      <Button variant="outline" disabled>
        Loading...
      </Button>
    );
  }

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">
          Welcome, {user.username}!
        </span>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button onClick={() => setShowAuthModal(true)}>Sign In</Button>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </>
  );
}
