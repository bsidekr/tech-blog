import { useMantineColorScheme } from '@mantine/core'

import { Toaster } from '@redwoodjs/web/toast'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/header/Header'

const BlogLayout = ({ children }) => {
  const { colorScheme } = useMantineColorScheme()

  return (
    <div className={colorScheme}>
      <Toaster />
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main className="mx-auto max-w-4xl rounded-b bg-white p-12 shadow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default BlogLayout
