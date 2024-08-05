import Wrapper from '@/components/ui/wrapper/Wrapper'
import Header from '@/components/ui/header/Header'
import Bar from '@/components/ui/bar/Bar'

export default function Home() {
  return (
    <>
      <Wrapper>
        <Header />
        <Bar />
        <img
          className='wrapper__img'
          src='/scenes/blob.png'
          alt='Wrapper img'
        />
      </Wrapper>
    </>
  )
}
