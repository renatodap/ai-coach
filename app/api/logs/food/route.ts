import { NextResponse } from 'next/server'

const foodLogs: any[] = []

export async function POST(request: Request) {
  const body = await request.json()
  const newEntry = {
    ...body,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  }
  foodLogs.push(newEntry)
  console.log('New Food Log:', newEntry)
  return NextResponse.json({ status: 'ok', data: newEntry })
}

export async function GET() {
  return NextResponse.json({ data: foodLogs })
}
