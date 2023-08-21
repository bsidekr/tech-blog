import { clsx, useMantineColorScheme } from '@mantine/core'

import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/header/Header'

const BlogLayout = ({ children }) => {
  const { colorScheme } = useMantineColorScheme()

  return (
    <div className={clsx(colorScheme)}>
      <MetaTags
        title="비사이드코리아 기술 블로그"
        description="우리는 문제와 해법에 접근하는 태도와 방식, 철학에 차이가 있다고 생각하며, 프로그래밍, 상품 디자인, 스타트업 등에 대한 우리의 생각들을 시간순으로 정리했습니다."
        ogType="website"
        locale="ko"
        ogContentUrl="https://pocky-production-s3.s3.ap-northeast-2.amazonaws.com/uploads/files/about_light"
        ogUrl="https://tech.bside.ai"
        contentType="website"
      />
      <div className="h-full min-h-screen bg-zinc-50 dark:bg-black">
        <Toaster />
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default BlogLayout
