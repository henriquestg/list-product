import { Navbar } from '@/components/Navbar'
import './page.scss'
import { Product } from '@/components/Product'
import { ListProduct } from '@/components/ListProduct'

export default function Home() {
  return (
    <main className='container'>
      <Navbar />
      <Product />
      <ListProduct />
    </main>
  )
}
