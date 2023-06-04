import { useRouter } from 'next/router'
import React from 'react'

import { H1, Image, YStack } from '@productsway/ui'

const languages = [
  { name: 'English', flag: 'https://flagcdn.com/16x12/gb.png', code: 'en' },
  { name: 'Español', flag: 'https://flagcdn.com/16x12/es.png', code: 'es' },
  { name: 'Français', flag: 'https://flagcdn.com/16x12/fr.png', code: 'fr' },
  { name: 'Deutsch', flag: 'https://flagcdn.com/16x12/de.png', code: 'de' },
  { name: 'Italiano', flag: 'https://flagcdn.com/16x12/it.png', code: 'it' },
]

export function HomeScreen() {
  const router = useRouter()

  const handleLanguagePress = (code: string) => {
    router.push(`/language/${code}`)
  }

  return (
    <YStack f={1} p="$4" space>
      <H1 ta="center">Select a language:</H1>
      {languages.map((language) => (
        <YStack key={language.code} p="$4" onPress={() => handleLanguagePress(language.code)}>
          <Image source={{ uri: language.flag }} width={16} height={12} />
          <H1>{language.name}</H1>
        </YStack>
      ))}
    </YStack>
  )
}
