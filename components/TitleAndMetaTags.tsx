import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  title?: string;
  description?: string;
  image: string;
  url?: string;
  pathname?: string;
};

export function TitleAndMetaTags({
  title = 'Pajak365',
  description = 'Konsultasikan pajak Anda dengan ahli, tanpa perlu datang ke kantor pajak.',
  image,
  url = 'https://pajak365.com',
  pathname,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const imageUrl = `${url}/social/${image}`;
  const path = pathname || router.pathname;

  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:site" content="@lesssummer" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
