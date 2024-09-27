import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const { telegramId, taskId } = await req.json();
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { telegramId },
    });

    // If the user doesn't exist, return an error
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Update user points
    await prisma.user.update({
      where: { telegramId },
      data: { points: { increment: 10 } },
    });

    // Update task status
    const taskStatus = await prisma.taskStatus.update({
      where: {
        // This should match the compound index you defined
        taskId_userId: {
          taskId: taskId,
          userId: user.id,
        },
      },
      data: { completed: true },
    });

    return NextResponse.json({ user, taskStatus });
  } catch (error) {
    console.error('Error updating task status:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
