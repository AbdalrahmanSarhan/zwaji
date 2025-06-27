import React from 'react';
import { Helmet } from 'react-helmet';
interface SEOProps {
  title: string;
  description: string;
  path: string;
}
export function SEO({
  title,
  description,
  path
}: SEOProps) {
  // Base URL - replace with your actual domain in production
  const baseUrl = 'https://zawaj-rights.app';
  const url = `${baseUrl}${path}`;
  return <Helmet>
      <title>{title} | حقوق الزوجين في الإسلام</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={`${title} | حقوق الزوجين في الإسلام`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="حقوق الزوجين في الإسلام" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | حقوق الزوجين في الإسلام`} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>;
}