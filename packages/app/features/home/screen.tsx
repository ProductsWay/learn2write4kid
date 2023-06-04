import React from 'react'
import { useRouter } from 'solito/router'

import { Anchor, Grid, H1, Image, YStack } from '@productsway/ui'

const languages = [
  { name: 'English', flag: 'https://flagcdn.com/64x48/gb.png', code: 'en' },
  { name: 'Vietnam', flag: 'https://flagcdn.com/64x48/vn.png', code: 'vn' },
  { name: 'Español', flag: 'https://flagcdn.com/64x48/es.png', code: 'es' },
  { name: 'Français', flag: 'https://flagcdn.com/64x48/fr.png', code: 'fr' },
  { name: 'Deutsch', flag: 'https://flagcdn.com/64x48/de.png', code: 'de' },
  { name: 'Italiano', flag: 'https://flagcdn.com/64x48/it.png', code: 'it' },
]

export function HomeScreen() {
  const router = useRouter()

  const handleLanguagePress = (code: string) => {
    router.push(`/language/${code}`)
  }
  return (
    <YStack f={1} p="$8" space="$4" h="100%">
      <H1 ta="center">Welcome to Learn2Write4Kids!</H1>
      <YStack f={1} p="$8" space="$4" h="100%" jc="center">
        <Grid gap="$4" itemMinWidth={200}>
          {languages.map((language) => (
            <Anchor key={language.code} onPress={() => handleLanguagePress(language.code)}>
              <Image source={{ uri: language.flag }} width={64} height={48} />
              <H1>{language.name}</H1>
            </Anchor>
          ))}
        </Grid>
      </YStack>
    </YStack>
  )
}
