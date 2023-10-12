import Link from 'next/link';
import classNames from 'classnames';
import Image from 'src/infrastructure/ui/atoms/Image';
import logo from '~/infrastructure/ui/assets/images/logo.svg';

import styles from './LogoHeader.module.scss';

type ImageSize = {
  width: number | string;
  height: number | string;
};

type LogoHeaderProps = {
  imageSize?: ImageSize;
  className?: string | number | symbol | undefined;
};

const LogoHeader = ({ imageSize, className }: LogoHeaderProps) => (
  <Link href="/" passHref>
    <Image
      src={logo}
      alt="header logo"
      imageSize={imageSize}
      className={classNames(styles.logoHeader, {
        [className || '']: Boolean(className)
      })}
    />
  </Link>
);

export default LogoHeader;
