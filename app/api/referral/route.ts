import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  const { telegramId, referredBy } = await req.json();

  // Update user with referredBy field
  await prisma.user.update({
    where: { telegramId },
    data: { referredBy },
  });

  // Increment points for the referring user
  await prisma.user.update({
    where: { telegramId: referredBy },
    data: { points: { increment: 10 } },
  });

  return NextResponse.json({ success: true });
}
