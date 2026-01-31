import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Services() {
  const router = useRouter()
  
  useEffect(() => {
    router.push('/#programs')
  }, [])

  return null
}
