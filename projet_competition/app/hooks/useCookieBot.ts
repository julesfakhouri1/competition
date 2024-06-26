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
      console.log('CookiebotOnLoad event fired')
      if (window.Cookiebot) {
        console.log('Setting Cookiebot in state')
        setCookiebot(window.Cookiebot)
      }
    }

    if (window.Cookiebot) {
      console.log('Cookiebot already available')
      setCookiebot(window.Cookiebot)
    } else {
      console.log('Cookiebot not available, using mock object')
      setCookiebot({
        consent: {
          marketing: false,
          statistics: false,
          preferences: false
        },
        show: () => console.log('Mock show method called'),
        renew: () => console.log('Mock renew method called')
      })
    }

    window.addEventListener('CookiebotOnLoad', handleCookiebotLoad)

    return () => {
      window.removeEventListener('CookiebotOnLoad', handleCookiebotLoad)
    }
  }, [])

  return cookiebot
}