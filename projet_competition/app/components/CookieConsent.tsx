'use client'

import { useEffect } from 'react'
import { useCookiebot } from '../hooks/useCookieBot'

export default function CookieConsent() {
  const cookiebot = useCookiebot()

  useEffect(() => {
    if (cookiebot) {
      // Cookiebot will automatically show the banner when necessary
      // We don't need to call cookiebot.show() here
    }
  }, [cookiebot])

  // This component doesn't render anything visible
  return null
}