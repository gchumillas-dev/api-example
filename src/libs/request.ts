import { useCallback, useState } from 'react';

export type Request= (...args: Parameters<typeof fetch>) => Promise<any>

export const useRequest = () => {
  const [count, setCount] = useState(0)
  const [error, setError] = useState<unknown>()

  const request: Request = useCallback(async (...args: Parameters<typeof fetch>): Promise<any> => {
    try {
      setError(undefined)
      setCount(count => count + 1)
      const res = await fetch(...args)
      const data = res.json()
      return data
    } catch (error) {
      setError(error)
    } finally {
      setCount(count => count - 1)
    }
  }, [])

  return { request, loading: count > 0, error }
}
