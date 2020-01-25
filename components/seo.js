import Head from 'next/head'
import React from 'react'

function Seo() {
  const site = {
    title: 'Kybele',
    description: ''
  }

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{site.title}</title>
      <meta name="description" content={site.description} />
      <meta name="theme-color" content="#017eff" />

      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/static/favicon-96x96.png"
      />
    </Head>
  )
}

export default Seo
