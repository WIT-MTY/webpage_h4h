import { NextRequest, NextResponse } from 'next/server'
import { createClientForServer } from '@/lib/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()

  if (!password) {
    return NextResponse.json({ message: 'La contraseña es requerida' }, { status: 400 })
  }

  const supabase = await createClientForServer()
  const { error } = await supabase.auth.updateUser({ password })

  console.log('Supabase error:', error)

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }

  return NextResponse.json({ message: 'Contraseña actualizada' }, { status: 200 })
}