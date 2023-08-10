import Link from 'next/link';
import classNames from 'classnames';
import Image from '~/infrastructure/ui/atoms/image';
import logo from '~/infrastructure/ui/assets/images/logo.svg';

import styles from './LogoHeader.module.scss';

interface LogoHeaderProps {
  className?: string | number | symbol | any | undefined;
}

const LogoHeader = ({ className }: LogoHeaderProps) => {
  return (
    <Link href="/" passHref>
      <Image
        src={logo}
        alt="header logo"
        imageSize={{
          width: 178,
          height: 100
        }}
        className={classNames(styles.logoHeader, {
          [className]: Boolean(className)
        })}
      />
    </Link>
  );
};

export default LogoHeader;
