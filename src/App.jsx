import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { setCurrentUser } from './store/user/user.action.js';
import { useDispatch } from 'react-redux';

import Home from './routes/Home/Home.jsx';
import Navigation from './routes/Navigation/Navigation.jsx';
import Authentication from './routes/Authentication/Authentication.jsx';
import Shop from './routes/Shop/Shop.jsx';
import Checkout from './routes/Checkout/Checkout.jsx';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        await createUserDocumentFromAuth(user);
      }
      
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;