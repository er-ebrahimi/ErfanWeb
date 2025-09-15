import { NextRequest, NextResponse } from 'next/server';

import { AuthService } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { code, password, passwordConfirmation } = await request.json();

    const result = await AuthService.resetPassword(
      code,
      password,
      passwordConfirmation
    );

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : 'Password reset failed',
      },
      { status: 400 }
    );
  }
}
