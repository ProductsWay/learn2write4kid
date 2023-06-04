import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

import { ChevronLeft } from '@tamagui/lucide-icons'

import { Button, Paragraph, YStack } from '@productsway/ui'

const { useParam } = createParam<{ id: string }>()

export function LanguageDetailScreen() {
  const [id] = useParam('id')
  const link = useLink({
    href: '/',
  })

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="700">{`Language: ${id}`}</Paragraph>
      <Button {...link} icon={ChevronLeft}>
        Go Home
      </Button>
    </YStack>
  )
}
