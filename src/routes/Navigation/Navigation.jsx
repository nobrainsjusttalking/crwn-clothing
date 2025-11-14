import { Outlet } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';

import CartIcon from '../../components/CartIcon/CartIcon.jsx';
import CartDropdown from '../../components/CartDropdown/CartDropdown.jsx';

import CrwnLogo  from '../../assets/crown.svg';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './Navigation.js';
import { signOutStart } from '../../store/user/user.action.js';

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
          ) : (
            <NavLink to="/auth">
                SIGN IN
            </NavLink>
          )} 
          <CartIcon />
        </NavLinks>
        {isCartOpen && (
          <CartDropdown isCartOpen={isCartOpen} />
        )}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;