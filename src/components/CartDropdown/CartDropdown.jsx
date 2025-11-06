import { useContext } from 'react';
import { useNavigate } from 'react-router';

import { CartContext } from '../../contexts/CartContext';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './CartDropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
      </div>

      <Button onClick={goToCheckoutHandler}>
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;