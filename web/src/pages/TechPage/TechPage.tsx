import { useState } from 'react'

import { clsx } from '@mantine/core'

import TechStackCard from 'src/components/TechStackCard/TechStackCard'
import SimpleLayout from 'src/layouts/SimpleLayout/SimpleLayout'

import { TechCategory, categories, techStacks } from './techStack.values'

const TechPage = () => {
  const [selectedCategory, setCategory] = useState<TechCategory>('Show All')
  const onClickCategory = (newCategory) => {
    setCategory(newCategory)
  }

  const filter = categories.map((category) => (
    <button
      onClick={() => onClickCategory(category)}
      key={`btn_${category}`}
      className={clsx(
        'border-b-[4px] px-1 py-1 text-xs font-bold transition sm:px-8 sm:text-sm',
        category == selectedCategory
          ? 'border-purple-300 text-purple-300'
          : 'border-zinc-100 hover:border-purple-300 dark:border-zinc-800 dark:hover:border-purple-300'
      )}
    >
      {category}
    </button>
  ))

  const stacks = techStacks.map((item) => {
    if (selectedCategory == 'Show All') {
      return <TechStackCard key={item.label} {...item} />
    } else if (item.categories.includes(selectedCategory))
      return <TechStackCard key={item.label} {...item} />
  })

  return (
    <>
      <SimpleLayout
        title="개발 경험에 집중"
        intro="우리는 개발 경험에 집착하고 가능한 많은 boilerplate를 제거하고자 합니다. 당면한 문제를 우아하게 해결할 수 있는 방법이 있다면 우리는 사용할 것이며, 그렇지 않은 경우에는 자체 솔루션을 개발합니다. 최종 결과는 사랑에 빠질 수 있는 개발 경험입니다!"
      >
        <div className="my-20 flex items-center justify-end gap-4">
          {filter}
        </div>
        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {stacks}
        </ul>
      </SimpleLayout>
    </>
  )
}

export default TechPage
