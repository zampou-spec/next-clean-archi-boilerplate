'use client';
import classNames from 'classnames';
import * as NextImage from 'next/image';
import { useEffect, useState } from 'react';

import styles from './Image.module.scss';

interface imageSize {
  width: number | string;
  height: number | string;
}

interface ImageProps {
  alt: string;
  imageSize?: imageSize;
  src: string | NextImage.StaticImageData;
  className?: string | number | symbol | undefined;
}

const Image = ({ src, alt, imageSize, className }: ImageProps) => {
  const [localImageSize, setLocalImageSize] = useState<{ width: number; height: number }>({ width: 200, height: 200 });

  useEffect(() => {
    if (typeof src === 'string') {
      const img: HTMLImageElement = new window.Image();

      img.src = src;
      img.onload = () => {
        setLocalImageSize({
          width: img.width,
          height: img.height
        });
      };
    } else {
      setLocalImageSize({
        width: src.width,
        height: src.height
      });
    }
  }, [src]);
  return (
    <div
      className={classNames(styles.imageContainer, {
        [className || '']: Boolean(className)
      })}
      style={imageSize}
    >
      <NextImage.default
        src={src}
        alt={alt}
        width={localImageSize.width || 200}
        height={localImageSize.height || 200}
        className={styles.customImage}
        priority
      />
    </div>
  );
};

export default Image;