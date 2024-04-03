import Joi from 'joi'
import Register from '../Register'
import { useParams } from 'react-router-dom'
import { TProduct } from '@/interfaces/TProduct'
import { joiResolver } from '@hookform/resolvers/joi'
import instance from '@/apis'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

type Props = {
  onEdit: (product: TProduct) => void
}
const productSchema = Joi.object({
  title: Joi.string().required,
  price: Joi.number().required,
  description: Joi.string().allow(null, '')
})

const ProductEdit = ({ onEdit }: Props) => {
  const { id } = useParams()
  const [product, setProduct] = useState<TProduct | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TProduct>({ resolver: joiResolver(productSchema) })

  useEffect(() => {
    ;(async () => {
      const { data } = await instance.get(`/products/${id}`)
      setProduct(data)
    })()
  }, [])
  const onSubmit = (product: TProduct) => {
    onEdit({ ...product, id })
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Update product</h1>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            className='form-control'
            type='text'
            {...register('title', { required: true, minLength: 3, maxLength: 255 })}
            defaultValue={product?.title}
          />
          {errors.title && <div className='text-danger'>{errors.title.message}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>Title</label>
          <input
            className='form-control'
            type='number'
            {...register('price', { required: true, minLength: 3, maxLength: 255 })}
            defaultValue={product?.price}
          />
          {errors.price && <div className='text-danger'>{errors.price.message}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <input
            className='form-control'
            type='text'
            {...register('description')}
            defaultValue={product?.description}
          />
        </div>
        <button className='btn btn-primary w-100'>Submit</button>
      </form>
    </div>
  )
}

export default ProductEdit
