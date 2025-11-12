import { Outlet } from 'react-router';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector.js';
import { selectIsCartOpen } from '../../store/cart/cart.selector.js';

import CartIcon from '../../components/CartIcon/CartIcon.jsx';
import CartDropdown from '../../components/CartDropdown/CartDropdown.jsx';

import CrwnLogo  from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './Navigation.js';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

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