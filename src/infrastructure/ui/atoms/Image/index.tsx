'use client';
import classNames from 'classnames';
import * as NextImage from 'next/image';
import { useEffect, useState, DragEvent } from 'react';

import styles from './Image.module.scss';

type ImageSize = {
  width: number | string;
  height: number | string;
};

type ImageProps = {
  alt: string;
  imageSize?: ImageSize;
  src: string | NextImage.StaticImageData;
  className?: string | number | symbol | undefined;
  onDragStart?: (e: DragEvent) => void;
};

const Image = ({ src, alt, imageSize, className, onDragStart }: ImageProps) => {
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
        onDragStart={onDragStart}
        width={localImageSize.width || 200}
        height={localImageSize.height || 200}
        className={styles.customImage}
        priority
      />
    </div>
  );
};

export default Image;
