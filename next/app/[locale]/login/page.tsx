import { Metadata } from 'next';
import Link from 'next/link';

import { AuthFormsWithNavigation } from '@/components/auth/auth-forms-with-navigation';

export const metadata: Metadata = {
  title: 'Authentication | Your App',
  description: 'Sign in or create an account to access your dashboard.',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">
            Sign in to your account or create a new one
          </p>
        </div>

        <AuthFormsWithNavigation />

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            By continuing, you agree to our{' '}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
