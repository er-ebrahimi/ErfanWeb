import { NextRequest, NextResponse } from 'next/server';

import { AuthService } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    await AuthService.forgotPassword(email);

    return NextResponse.json({ message: 'Password reset email sent' });
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Password reset failed',
      },
      { status: 400 }
    );
  }
}
