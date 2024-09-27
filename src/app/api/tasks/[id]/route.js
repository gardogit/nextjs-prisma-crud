import { NextResponse } from "next/server";
import {prisma} from '@/libs/prisma'

export async function GET(req, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return NextResponse.json(task);
}

export async function PUT(req, { params }) {
  const data = await req.json();
  const putTask = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data
  });
  return NextResponse.json(putTask);
}

export async function DELETE(req, { params }) {
  try {
    const taskRemoved = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(taskRemoved);
  } catch (err) {
    return NextResponse.json(err.message);
  }
}