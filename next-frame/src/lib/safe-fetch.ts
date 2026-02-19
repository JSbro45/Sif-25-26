

export default async function safeFetch<T>(
  fetchFn: () => Promise<T>,
  fallback: T
): Promise<T> {
  try {
    return await fetchFn()
  } catch (error) {
    console.error('Fetch failed:', error)
    return fallback
  }
}