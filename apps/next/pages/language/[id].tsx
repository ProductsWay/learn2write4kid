import Head from 'next/head'

import { LanguageDetailScreen } from 'app/features/language/detail-screen'

export default function Page() {
  return (
    <>
      <Head>
        <title>How to Write</title>
      </Head>
      <LanguageDetailScreen />
    </>
  )
}
