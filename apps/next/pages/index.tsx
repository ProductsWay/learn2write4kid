import Head from 'next/head'

import { HomeScreen } from 'app/features/home/screen'

export default function Page() {
  return (
    <>
      <Head>
        <title>Learn 2 Write For Kids</title>
      </Head>
      <HomeScreen />
    </>
  )
}
