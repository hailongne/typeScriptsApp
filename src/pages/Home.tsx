import ProductList from '@/components/ProductList'

type Props = {}
const Home = (props: Props) => {
  return (
    <div>
      <h2>Danh sach san pham:</h2>
      <ProductList />
    </div>
  )
}

export default Home
