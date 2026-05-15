import { createClientForServer } from '@/lib/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(`${origin}/registro/iniciosesion`)
  }

  const supabase = await createClientForServer()
  const { error } = await supabase.auth.exchangeCodeForSession(code)

  if (error) {
    console.log('Callback error:', error)
    return NextResponse.redirect(`${origin}/registro/iniciosesion`)
  }

  return NextResponse.redirect(`${origin}/registro/actualizar`)
}