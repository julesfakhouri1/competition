'use client'

import { useState, useEffect } from 'react'

declare global {
  interface Window {
    Cookiebot: any;
  }
}

export function useCookiebot() {
  const [cookiebot, setCookiebot] = useState<any>(null)

  useEffect(() => {
    const handleCookiebotLoad = () => {
      if (window.Cookiebot) {
        setCookiebot(window.Cookiebot)
      }
    }

    // Check if Cookiebot is already available
    if (window.Cookiebot) {
      setCookiebot(window.Cookiebot)
    }

    // Listen for Cookiebot to load
    window.addEventListener('CookiebotOnLoad', handleCookiebotLoad)

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('CookiebotOnLoad', handleCookiebotLoad)
    }
  }, [])

  return cookiebot
}