export const useApi = () => {
  const config = useRuntimeConfig()
  
  const fetchProducts = () => useFetch(`${config.public.apiUrl}/api/product`)
  
  const fetchProduct = (id: string) => useFetch(`${config.public.apiUrl}/api/product/${id}`)

  return {
    fetchProducts,
    fetchProduct
  }
}