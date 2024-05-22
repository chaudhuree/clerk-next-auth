// ai route ta navbar a akta item er link a dewa hoyeche. li button a click korle
// amader /me te hit korbe and aitar response ta pawa jabe.oita kono GUI hobe na. just 
// JSON response
import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'

export async function GET() {
  const { userId } = auth()

  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  return NextResponse.json({ userId }, { status: 200 })
}
