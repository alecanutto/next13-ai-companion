import prismadb from '@/lib/prismadb'

import { Categories } from '@/components/categories'
import { SearchInput } from '@/components/search-input'
import { Companions } from '@/components/companions'

import { getTranslator } from 'next-intl/server'
import { currentUser } from '@clerk/nextjs'

interface RootPageProps {
  params: {
    locale: string
  }
  searchParams: {
    categoryId: string
    name: string
  }
}

const RootPage = async ({
  params: { locale },
  searchParams,
}: RootPageProps) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        search: searchParams.name,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      _count: {
        select: {
          messages: true,
        },
      },
    },
  })

  const user = await currentUser()

  const t = await getTranslator(locale, 'common')

  const categories = await prismadb.category.findMany()

  return (
    <div className="h-full p-4 space-y-2">
      <h1>{t('welcome', { firstname: user?.firstName })}</h1>
      <SearchInput />
      <Categories data={categories} />
      <Companions data={data} />
    </div>
  )
}

export default RootPage
