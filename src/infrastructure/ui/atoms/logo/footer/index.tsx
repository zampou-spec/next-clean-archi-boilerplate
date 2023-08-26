import Link from 'next/link';
import Image from '~/infrastructure/ui/atoms/image';
import logo from '~/infrastructure/ui/assets/images/logo.svg';

import styles from './LogoFooter.module.scss';

const LogoFooter = () => {
  return (
    <Link href="/" passHref className={styles.logoFooter}>
      <Image
        src={logo}
        alt="header logo"
        imageSize={{
          width: 4724,
          height: 2480
        }}
        customSize={{
          width: 210,
          height: 'auto'
        }}
      />
    </Link>
  );
};

export default LogoFooter;
