import SignUp from '~/infrastructure/ui/organismes/Auth/SignUp';

import styles from './SignUpTemplate.module.scss';

const SignUpTemplate = () => {
  return (
    <div className={styles.signUpTemplate}>
      <SignUp />
    </div>
  );
};

export default SignUpTemplate;
