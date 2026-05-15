'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import HeaderForms from '@/app/componentes/formulario_comp/HeaderForms'
import BackgroundDecor from '@/app/componentes/general/BackgroundDoodles'

export default function Page() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isPending, setIsPending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password) { setError('La contraseña es requerida'); return }
    if (password.length < 6) { setError('Mínimo 6 caracteres'); return }

    setIsPending(true)
    setError('')

    try {
      const res = await fetch('/api/update-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Ocurrió un error')
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
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-white mb-2">
                    Nueva contraseña <span className="text-red-400">*</span>
                  </p>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 rounded-md bg-white text-black"
                    placeholder="Ingresa tu nueva contraseña"
                  />
                </div>
              </div>
            </div>

            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            {success && <p className="text-green-400 text-sm text-center">{success}</p>}

            <button
              type="submit"
              disabled={isPending}
              className="w-full text-white font-montserrat text-base sm:text-lg md:text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] py-4 px-6 border-[3px] disabled:opacity-60"
              style={{ backgroundColor: '#4F123F', borderColor: '#4F123F' }}
            >
              {isPending ? 'Actualizando...' : 'Actualizar contraseña'}
            </button>
          </form>
        </main>
      </div>
    </section>
  )
}