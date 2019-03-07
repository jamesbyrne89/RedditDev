import React from 'react';
import Head from 'next/head';

type Props = { title: string };

const DocumentHead: React.FunctionComponent<Props> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link
      href="https://fonts.googleapis.com/css?family=Space+Mono:300,400"
      rel="stylesheet"
    >
    </link>
  </Head>
);

export default DocumentHead;
