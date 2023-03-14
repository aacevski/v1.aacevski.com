import { useCallback } from 'react';
import useSWR, { mutate } from 'swr';

import { Views } from '~types/blog-post';
import { fetcher } from '~utils/fetcher';

const useBlogPostViews = (slug: string) => {
  const { data, isLoading } = useSWR(
    slug ? `${slug}/views` : null,
    () => fetcher<Views>(`/api/views/${slug}`),
    {
      revalidateOnFocus: false,
    },
  );

  const increment = useCallback(() => {
    mutate(`${slug}/views`, fetcher<Views>(`/api/views/${slug}`, {
      method: 'POST',
    }), false);
  }, [slug]);

  return { views: data?.views, increment, isLoading };
};

export default useBlogPostViews;
