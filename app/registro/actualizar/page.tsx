// app/registro/actualizar/page.tsx
'use client'

import { useActionState } from 'react'
import { updatePassword } from '@/app/registro/actions'
import HeaderForms from '@/app/componentes/formulario_comp/HeaderForms'
import BackgroundDecor from '@/app/componentes/general/BackgroundDoodles'

export default function Page() {
  const [state, formAction, isPending] = useActionState(updatePassword, {
    error: '',
    success: '',
  })

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
          <form className="space-y-6 pb-20 mt-8" action={formAction}>
            <div className="bg-white/10 p-8 rounded-lg">
              <h2 className="text-white text-xl font-semibold mb-4">Actualizar contraseña</h2>
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-white mb-2">
                    Nueva contraseña <span className="text-red-400">*</span>
                  </p>
                  <input
                    type="password"
                    name="password"
                    className="w-full p-3 rounded-md bg-white text-black"
                    placeholder="Ingresa tu nueva contraseña"
                  />
                </div>
              </div>
            </div>

            {state.error && <p className="text-red-400 text-sm text-center">{state.error}</p>}
            {state.success && <p className="text-green-400 text-sm text-center">{state.success}</p>}

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