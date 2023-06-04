import { useRouter } from 'next/router'
import React from 'react'

import { Anchor, H1, Image, YStack } from '@productsway/ui'

const languages = [
  { name: 'English', flag: { uri: 'https://www.countryflags.io/gb/flat/64.png' }, code: 'en' },
  { name: 'Español', flag: { uri: 'https://www.countryflags.io/es/flat/64.png' }, code: 'es' },
  { name: 'Français', flag: { uri: 'https://www.countryflags.io/fr/flat/64.png' }, code: 'fr' },
  { name: 'Deutsch', flag: { uri: 'https://www.countryflags.io/de/flat/64.png' }, code: 'de' },
  { name: 'Italiano', flag: { uri: 'https://www.countryflags.io/it/flat/64.png' }, code: 'it' },
]

export function HomeScreen() {
  const router = useRouter()

  const handleLanguagePress = (code: string) => {
    router.push(`/language/${code}`)
  }

  return (
    <YStack f={1} p="$4" space>
      <H1 ta="center">Let's learn</H1>
      {languages.map((language) => (
        <YStack key={language.code} p="$4" onPress={() => handleLanguagePress(language.code)}>
          <Image source={language.flag} />
          <H1>{language.name}</H1>
        </YStack>
      ))}
    </YStack>
  )
}
