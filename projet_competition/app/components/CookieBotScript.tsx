'use client'

import { useEffect } from 'react'

export default function CookiebotScript() {
  useEffect(() => {
    const script = document.createElement('script')
    script.id = 'Cookiebot'
    script.src = 'https://consent.cookiebot.com/uc.js'
    script.setAttribute('data-cbid', '3e37d13a-fe46-463a-bff0-9d48e5418d11')
    script.setAttribute('data-blockingmode', 'auto')
    script.async = true
    
    script.onload = () => {
      console.log('Cookiebot script loaded')
      if (window.Cookiebot) {
        console.log('Cookiebot object exists')
        if (typeof window.Cookiebot.renew === 'function') {
          window.Cookiebot.renew()
        } else {
          console.log('Cookiebot.renew is not a function')
        }
      } else {
        console.log('Cookiebot object does not exist')
      }
    }

    document.head.appendChild(script)

    return () => {
      const scriptElement = document.getElementById('Cookiebot')
      if (scriptElement) {
        document.head.removeChild(scriptElement)
      }
    }
  }, [])

  return null
}