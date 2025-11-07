import SignInForm from '../../components/SignInForm/SignInForm.jsx';
import SignUpForm from '../../components/SignUpForm/SignUpForm.jsx';

import { AuthenticationContainer } from './Authentication.js';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;