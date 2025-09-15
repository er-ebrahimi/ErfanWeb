import { NextRequest, NextResponse } from 'next/server';

import { AuthService } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const result = await AuthService.login({ identifier: email, password });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Login failed' },
      { status: 400 }
    );
  }
}
