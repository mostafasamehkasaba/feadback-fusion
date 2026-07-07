import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="relative border-t bg-background mt-auto">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

      <div className="mx-auto max-w-6xl px-6 py-6">
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            <span>by</span>
            <span className="font-semibold text-foreground">Mostafa</span>
          </div>

          <span className="text-xs text-muted-foreground">
            © {currentYear} — All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer