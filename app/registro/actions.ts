'use server'

import { createClientForServer } from "@/lib/server";
import { redirect } from 'next/navigation'

export async function sendResetPasswordEmail(
  prevState: { error: string; success: string },
  formData: FormData
) {
  const email = formData.get('email') as string

  if (!email) return { error: 'El correo es requerido', success: '' }

  const supabase = await createClientForServer()
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/registro/actualizar`,
  })

  if (error) return { error: error.message, success: '' }

  return { error: '', success: 'Correo enviado. Revisa tu bandeja de entrada.' } // 👈 asegúrate de tener esto
}

export async function updatePassword(
  prevState: { error: string; success: string },
  formData: FormData
) {
  const password = formData.get('password') as string

  if (!password) return { error: 'La contraseña es requerida', success: '' }
  if (password.length < 6) return { error: 'Mínimo 6 caracteres', success: '' }

  const supabase = await createClientForServer()
  const { error } = await supabase.auth.updateUser({ password })

  if (error) return { error: error.message, success: '' }

  redirect('/registro/iniciosesion')
}