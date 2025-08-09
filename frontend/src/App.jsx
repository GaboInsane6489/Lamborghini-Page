// Importa React hooks si los necesitas (por ejemplo, useState)
import { useState } from 'react'

// Logos para mostrar si quieres usar imágenes en el futuro
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Importa los estilos globales, incluyendo Tailwind CSS
// Asegúrate de que index.css tenga: @import "tailwindcss";
import './index.css'

// Importa el componente Button desde tu carpeta UI
import { Button } from '@/components/ui/button'

// Componente principal de tu app
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-black text-white flex items-center justify-center flex-col gap-6">
      {/* Título principal con estilos Tailwind */}
      <h1 className="text-5xl font-bold underline">
        🚀 Tailwind v4 funcionando
      </h1>

      {/* Botón reutilizable con variante "outline" */}
      <Button variant="outline">Click aquí</Button>
    </div>
  )
}
