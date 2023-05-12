import React from 'react'
import CartItem from './CartItem'
import { clearCart } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../features/modal/modalSlice'

const CartContainer = () => {
  const { amount, total, cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    )
  }

  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(open())}>
          clear cart
        </button>
      </footer>
    </section>
  )
}
export default CartContainer