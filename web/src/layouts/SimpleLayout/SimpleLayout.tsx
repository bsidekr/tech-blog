import Container from 'src/components/Container'

type SimpleLayoutProps = {
  title: string
  intro: string
  children?: React.ReactNode
}

const SimpleLayout = ({ title, intro, children }: SimpleLayoutProps) => {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1>{title}</h1>
        <p className="mt-6">{intro}</p>
      </header>
      <div className="sm:mt20 mt-16">{children}</div>
    </Container>
  )
}

export default SimpleLayout
