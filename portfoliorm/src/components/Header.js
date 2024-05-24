import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const [pageTitle, setPageTitle] = useState('')
  const router = useRouter()

  useEffect(() => {
    switch (router.pathname) {
      case '/':
        setPageTitle('Home')
        break
      case '/about':
        setPageTitle('About Me')
        break
      case '/projects':
        setPageTitle('Projects')
        break
      default:
        setPageTitle('')
    }
  }, [router.pathname])

  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto text-white">
        <h1 className="text-2xl">{pageTitle}</h1>
      </div>
    </header>
  )
}
