import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Erreur réseau')
        }
        return res.json()
      })
      .then((json) => {
        setData(json)
        setIsLoading(false)
      })
      .catch(() => {
        setError(true)
        setIsLoading(false)
      })
  }, [url])

  return { data, isLoading, error }
}

export default useFetch