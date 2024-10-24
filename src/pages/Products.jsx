import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../store'

const Products = () => {
  const dispatch = useDispatch()

  const productList = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 999.99,
      image: "https://via.placeholder.com/150",
      description: "High-performance gaming laptop with RGB keyboard"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 199.99,
      image: "https://via.placeholder.com/150",
      description: "Premium noise-cancelling wireless headphones"
    },
    {
      id: 3,
      name: "Smartwatch",
      price: 299.99,
      image: "https://via.placeholder.com/150",
      description: "Fitness tracking smartwatch with heart rate monitor"
    },
    {
      id: 4,
      name: "4K Monitor",
      price: 399.99,
      image: "https://via.placeholder.com/150",
      description: "32-inch 4K Ultra HD display"
    }
  ]

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Our Products</h2>
      <div className="row">
        {productList.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text"><strong>${product.price}</strong></p>
                <button 
                  className="btn btn-primary"
                  onClick={() => dispatch(addItem(product))}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products

