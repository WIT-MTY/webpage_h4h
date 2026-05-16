'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import HeaderForms from '@/app/componentes/formulario_comp/HeaderForms'
import BackgroundDecor from '@/app/componentes/general/BackgroundDoodles'
import { createClientForBrowser } from '@/lib/client'

export default function Page() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const code = searchParams.get('code')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isPending, setIsPending] = useState(false)
  const [isValidatingLink, setIsValidatingLink] = useState(true)
  const [canUpdatePassword, setCanUpdatePassword] = useState(false)
  const [mostrarContrasena, setMostrarContrasena] = useState(false);

  useEffect(() => {
    let isMounted = true

    async function validateRecoveryLink() {
      const supabase = createClientForBrowser()

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!isMounted) return

        if (error) {
          const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
          if (sessionError || !sessionData.session) {
            if ((error as { code?: string })?.code === 'pkce_code_verifier_not_found') {
              setError('El enlace se abrió en un navegador/dispositivo distinto. Solicita otro y ábrelo en el mismo navegador donde lo pediste.')
            } else {
              setError('No se pudo validar el enlace. Solicita uno nuevo.')
            }
            setCanUpdatePassword(false)
          } else {
            setCanUpdatePassword(true)
          }
        } else {
          setCanUpdatePassword(true)
        }

        setIsValidatingLink(false)
        return
      }

      const { data, error } = await supabase.auth.getSession()

      if (!isMounted) return

      if (error || !data.session) {
        setError('El enlace de recuperación es inválido o ha expirado')
        setCanUpdatePassword(false)
      } else {
        setCanUpdatePassword(true)
      }

      setIsValidatingLink(false)
    }

    validateRecoveryLink()

    return () => {
      isMounted = false
    }
  }, [code])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isValidatingLink || !canUpdatePassword) return
    if (!password) {
      setError('La contraseña es requerida')
      return
    }
    if (password.length < 6) {
      setError('Mínimo 6 caracteres')
      return
    }

    setIsPending(true)
    setError('')

    try {
      const supabase = createClientForBrowser()
      const { error } = await supabase.auth.updateUser({ password })

      if (error) {
        setError(error.message || 'Ocurrió un error al actualizar la contraseña')
      } else {
        setSuccess('Contraseña actualizada correctamente')
        setTimeout(() => router.push('/registro/iniciosesion'), 2000)
      }
    } catch {
      setError('Error al conectar con el servidor')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <section
      className="w-full min-h-screen flex flex-col relative"
      style={{ background: 'linear-gradient(180deg, #AC1C75, #761450, #5F1040)' }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <BackgroundDecor />
      </div>
      <div className="relative z-10 w-full">
        <HeaderForms />
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative z-10">
        <main className="w-full max-w-md mx-auto">
          <form className="space-y-6 pb-20 mt-8" onSubmit={handleSubmit}>
            <div className="bg-white/10 p-8 rounded-lg">
              <h2 className="text-white text-xl font-semibold mb-4">Actualizar contraseña</h2>
              {isValidatingLink && (
                <p className="text-white text-sm mb-4">Validando enlace de recuperación...</p>
              )}
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-white mb-2">
                    Nueva contraseña <span className="text-red-400">*</span>
                  </p>
                  <div className="relative">
                    <input
                      type={mostrarContrasena ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isValidatingLink || !canUpdatePassword}
                      className="w-full p-3 rounded-md bg-white text-black pr-12"
                      placeholder="Ingresa tu nueva contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setMostrarContrasena(!mostrarContrasena)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {mostrarContrasena ? (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 4.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            {success && <p className="text-green-400 text-sm text-center">{success}</p>}

            <button
              type="submit"
              disabled={isPending || isValidatingLink || !canUpdatePassword}
              className="w-full text-white font-montserrat text-base sm:text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-4 px-6 border-[3px] disabled:opacity-60"
              style={{ backgroundColor: '#4F123F', borderColor: '#4F123F' }}
            >
              {isValidatingLink
                ? 'Validando enlace...'
                : isPending
                  ? 'Actualizando...'
                  : 'Actualizar contraseña'}
            </button>
          </form>
        </main>
      </div>
    </section>
  )
}
