import { useContext } from 'react';
import { Outlet, Link } from 'react-router';

import CartIcon from '../../components/CartIcon/CartIcon';
import CartDropdown from '../../components/CartDropdown/CartDropdown';

import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';

import CrwnLogo  from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './Navigation.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
                SIGN IN
            </Link>
          )} 
          <CartIcon />
        </div>
        {isCartOpen && (
          <CartDropdown isCartOpen={isCartOpen} />
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;