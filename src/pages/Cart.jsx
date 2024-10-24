import React from 'react'
import { Container, Table, Button } from 'react-bootstrap'

function Cart() {
  const cartItems = [
    { id: 1, name: 'Premium Headphones', price: 199.99, quantity: 1 },
    { id: 2, name: 'Smart Watch', price: 299.99, quantity: 1 },
  ]

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <Container>
      <h2 className="my-4">Shopping Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <Button variant="danger" size="sm">Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3" className="text-end"><strong>Total:</strong></td>
            <td colSpan="2"><strong>${total.toFixed(2)}</strong></td>
          </tr>
        </tfoot>
      </Table>
      <div className="d-flex justify-content-end">
        <Button variant="success" size="lg">Checkout</Button>
      </div>
    </Container>
  )
}

export default Cart
