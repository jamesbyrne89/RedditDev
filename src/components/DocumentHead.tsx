import React from 'react';
import Head from 'next/head';

type Props = { title: string };

const DocumentHead: React.FunctionComponent<Props> = ({ title }) => (
  <Head>
    <title>{title}</title>
  </Head>
);

export default DocumentHead;
