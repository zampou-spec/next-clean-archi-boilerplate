import Link from 'next/link';
import classNames from 'classnames';
import Image from 'src/infrastructure/ui/atoms/Image';
import logo from '~/infrastructure/ui/assets/images/logo.svg';

import styles from './LogoHeader.module.scss';

interface LogoHeaderProps {
  className?: string | number | symbol | undefined;
}

const LogoHeader = ({ className }: LogoHeaderProps) => {
  return (
    <Link href="/" passHref>
      <Image
        src={logo}
        alt="header logo"
        className={classNames(styles.logoHeader, {
          [className || '']: Boolean(className)
        })}
      />
    </Link>
  );
};

export default LogoHeader;
