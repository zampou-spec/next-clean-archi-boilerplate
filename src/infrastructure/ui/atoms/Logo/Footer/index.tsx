import Link from 'next/link';
import Image from 'src/infrastructure/ui/atoms/Image';
import logo from '~/infrastructure/ui/assets/images/logo.svg';

import styles from './LogoFooter.module.scss';

const LogoFooter = () => (
  <Link href="/" passHref className={styles.logoFooter}>
    <Image
      src={logo}
      alt="header logo"
      imageSize={{
        width: 210,
        height: 'auto'
      }}
    />
  </Link>
);

export default LogoFooter;
