import SignIn from '~/infrastructure/ui/organismes/Auth/SignIn';

import styles from './SignInTemplate.module.scss';

const SignInTemplate = () => {
  return (
    <div className={styles.loginTemplate}>
      <SignIn />
    </div>
  );
};

export default SignInTemplate;
