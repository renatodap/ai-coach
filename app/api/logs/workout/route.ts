import { NextResponse } from 'next/server'

const workoutLogs: any[] = []

export async function POST(request: Request) {
  const body = await request.json()
  const newEntry = {
    ...body,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  }
  workoutLogs.push(newEntry)
  console.log('New Workout Log:', newEntry)
  return NextResponse.json({ status: 'ok', data: newEntry })
}

export async function GET() {
  return NextResponse.json({ data: workoutLogs })
}
