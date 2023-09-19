'use client'

import { usePathname, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-react'
import { useTranslations } from 'next-intl'

export function LocaleSwitcher() {
  const t = useTranslations('locale')
  const router = useRouter()
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    const segments = pathName.split('/')
    segments[1] = locale
    const path = segments.join('/')
    router.push(path)
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Languages className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t('title')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => redirectedPathName('pt')}>
          {t('pt')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => redirectedPathName('en')}>
          {t('en')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
