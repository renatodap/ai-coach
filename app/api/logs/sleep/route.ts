import { NextResponse } from 'next/server'

const sleepLogs: any[] = []

export async function POST(request: Request) {
  const body = await request.json()
  const newEntry = {
    ...body,
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
  }
  sleepLogs.push(newEntry)
  console.log('New Sleep Log:', newEntry)
  return NextResponse.json({ status: 'ok', data: newEntry })
}

export async function GET() {
  return NextResponse.json({ data: sleepLogs })
}
