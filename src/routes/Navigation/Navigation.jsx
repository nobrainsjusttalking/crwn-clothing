import { useContext } from 'react';
import { Outlet } from 'react-router';

import CartIcon from '../../components/CartIcon/CartIcon.jsx';
import CartDropdown from '../../components/CartDropdown/CartDropdown.jsx';

import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import CrwnLogo  from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from './Navigation.js';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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