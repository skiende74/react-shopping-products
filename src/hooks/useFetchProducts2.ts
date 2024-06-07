import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/products';
import { Product } from '../types/fetch';

const getSize = (page: number) => (page === 0 ? 20 : 4);
const getPage = (lastPage: number) =>
  lastPage === 0 ? lastPage + 5 : lastPage + 1;
const useProducts = (options?: object) => {
  const defaultOptions = {
    queryKey: ['product'],
    queryFn: async ({ pageParam }) =>
      await fetchProducts(pageParam, getSize(pageParam)),
    initialPageParam: 0,
    getNextPageParam: (_, __, lastPageParam) => getPage(lastPageParam),
  };

  const {
    data,
    isError,
    isPending,
    isSuccess,
    isFetching,
    hasNextPage,
    fetchNextPage: fetchNext,
  } = useInfiniteQuery({
    ...defaultOptions,
    ...options,
  });

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    if (!isSuccess) return;
    if (!data.pages.at(-1)) return;
    setProducts((prev) => [...prev, ...data.pages.at(-1)!.content]);
  }, [data?.pageParams, isError, isPending]);
  const isLast = !hasNextPage;

  return { data, isError, isPending, isLast, isFetching, fetchNext };
};

export default useProducts;