import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const leaderboardUsers = await prisma.user.findMany({
      orderBy: { points: 'desc' },
      take: 50, // Top 50 users
    });

    return NextResponse.json(leaderboardUsers);
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard' },
      { status: 500 }
    );
  }
}
