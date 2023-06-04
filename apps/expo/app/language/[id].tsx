import { Stack } from 'expo-router'

import { LanguageDetailScreen } from 'app/features/language/detail-screen'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'How to Write',
        }}
      />
      <LanguageDetailScreen />
    </>
  )
}
