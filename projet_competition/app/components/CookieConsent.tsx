'use client'

import { useState, useEffect } from 'react'
import { useCookiebot } from '../hooks/useCookieBot'

export default function CookieConsent() {
  const cookiebot = useCookiebot()
  const [status, setStatus] = useState('Loading Cookiebot...')

  useEffect(() => {
    if (cookiebot) {
      setStatus('Cookiebot loaded')
      console.log('Cookiebot object:', cookiebot)
    }
  }, [cookiebot])

  const openCookieSettings = () => {
    if (cookiebot) {
      cookiebot.show()
    }
  }

  if (!cookiebot) {
    return <div>{status}</div>
  }

  return (
    <div>
      <p>Cookiebot Status: {status}</p>
      <p>Marketing consent: {cookiebot.consent.marketing ? 'Yes' : 'No'}</p>
      <p>Statistics consent: {cookiebot.consent.statistics ? 'Yes' : 'No'}</p>
      <p>Preferences consent: {cookiebot.consent.preferences ? 'Yes' : 'No'}</p>
      <button onClick={openCookieSettings}>Open Cookie Settings</button>
    </div>
  )
}