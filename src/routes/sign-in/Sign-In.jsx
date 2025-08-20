import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import {
  auth,
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignIn = () => {
  useEffect(() => {
    async function getRedirect() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
        console.log(userDocRef);
      }
    }

    getRedirect();
  }, []);

  const logGoogleUser = async() => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;







// import {
//   signInWithGooglePopup, 
//   createUserDocumentFromAuth
// } from '../../utils/firebase/firebase.utils';

// import SignUpForm from '../../components/SignUpForm/SignUpForm';

// const SignIn = () => {

//   const logGoogleUser = async() => {
//     const {user} = await signInWithGooglePopup();
//     const userDocRef = await createUserDocumentFromAuth(user);
//   };


//   return (
//     <div>
//       <h1>Sign In Page</h1>
//       <button onClick={logGoogleUser}>Sign in with Google Popup</button>
//       <SignUpForm />
//     </div>
//   );
// };

// export default SignIn;