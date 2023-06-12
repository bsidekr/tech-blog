import { useMantineColorScheme } from '@mantine/core'

import { Toaster } from '@redwoodjs/web/toast'

import Header from 'src/components/header/Header'

const BlogLayout = ({ children }) => {
  const { colorScheme } = useMantineColorScheme()

  return (
    <>
      <Toaster />
      <div className={colorScheme}>
        <Header />
        <main className="mx-auto max-w-4xl rounded-b bg-white p-12 shadow">
          {children}
        </main>
      </div>
    </>
  )
}

export default BlogLayout
