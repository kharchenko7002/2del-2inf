import { NextResponse } from 'next/server'
import db from '@/lib/db'

export async function GET() {
  try {
    const [rows] = await db.query(`
      SELECT id, temp, fukt, created_at
      FROM sensor_data
      WHERE created_at >= NOW() - INTERVAL 12 HOUR
      ORDER BY created_at ASC
    `)

    return NextResponse.json(rows)
  } catch (error) {
    console.error('API /readings error:', error)
    return NextResponse.json(
      { error: 'Kunne ikke hente måledata' },
      { status: 500 }
    )
  }
}