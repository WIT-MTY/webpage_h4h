import { createClientForServer } from '@/lib/server'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  const tokenHash = searchParams.get('token_hash')
  const type = searchParams.get('type')
  const accessToken = searchParams.get('access_token')
  const refreshToken = searchParams.get('refresh_token')
  const errorCode = searchParams.get('error_code')
  const errorDescription = searchParams.get('error_description')

  console.log('Auth callback params:', {
    hasCode: Boolean(code),
    hasTokenHash: Boolean(tokenHash),
    type,
    hasAccessToken: Boolean(accessToken),
    hasRefreshToken: Boolean(refreshToken),
    errorCode,
    errorDescription,
  })

  const supabase = await createClientForServer()

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      return NextResponse.redirect(`${origin}/registro/actualizar`)
    }

    console.log('Callback exchangeCodeForSession error:', error)
    return NextResponse.redirect(
      `${origin}/registro/actualizar?code=${encodeURIComponent(code)}`
    )
  }

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: type as
        | 'signup'
        | 'invite'
        | 'magiclink'
        | 'recovery'
        | 'email_change'
        | 'email',
    })

    if (error) {
      console.log('Callback verifyOtp error:', error)
      return NextResponse.redirect(`${origin}/registro/iniciosesion`)
    }

    return NextResponse.redirect(`${origin}/registro/actualizar`)
  }

  if (accessToken && refreshToken) {
    const { error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    })

    if (error) {
      console.log('Callback setSession error:', error)
      return NextResponse.redirect(`${origin}/registro/iniciosesion`)
    }

    return NextResponse.redirect(`${origin}/registro/actualizar`)
  }

  return NextResponse.redirect(`${origin}/registro/iniciosesion`)
}
