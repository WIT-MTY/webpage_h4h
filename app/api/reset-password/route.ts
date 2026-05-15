import { NextRequest, NextResponse } from 'next/server'
import { createClientForServer } from '@/lib/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  console.log('Body recibido:', body)   
  const { email } = body
  

  if (!email) {
    return NextResponse.json({ message: 'El correo es requerido' }, { status: 400 })
  }

  const supabase = await createClientForServer()
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
  })

  console.log('Supabase error:', error) //

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 400 })
  }

  return NextResponse.json({ message: 'Correo enviado' }, { status: 200 })
}