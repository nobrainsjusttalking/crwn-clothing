import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { CartContext } from '../../contexts/CartContext';

import Button from '../Button/Button.jsx';
import CartItem from '../CartItem/CartItem.jsx';

import { CartDropdownContainer, EmptyMessage, CartItems } from './CartDropdown.js';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {
          cartItems.length ? (
            cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty</EmptyMessage>
          )
        }
      </CartItems>

      <Button onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;