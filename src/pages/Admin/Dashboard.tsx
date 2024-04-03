import { TProduct } from '@/interfaces/TProduct'
import { Link } from 'react-router-dom'

type Props = {
  products: TProduct[] // Đảm bảo rằng products là một mảng của các sản phẩm
}

const Dashboard = ({ products }: Props) => {
  // Kiểm tra nếu products không tồn tại hoặc không phải là một mảng
  if (!products || !Array.isArray(products)) {
    // Khởi tạo một giá trị mặc định cho products là một mảng trống
    products = []
  }

  return (
    <div className='container'>
      <h1>Hello, Admin</h1>
      <Link className='btn btn-primary' to='/admin/add'>
        Add new Product
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <img width={140} src={item.thumbnail} alt={item.title} />
              </td>
              <td>{item.description}</td>
              <td>
                <Link to={`/admin/edit/${item.id}`} className='btn btn-danger'>
                  Update
                </Link>
                <button className='btn btn-warning'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
