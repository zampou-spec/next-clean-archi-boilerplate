'use client';
import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './Section.module.scss';

interface SectionProps {
  children: ReactNode;
  className?: string | number | symbol | undefined;
}

const Section = ({ children, className }: SectionProps) => (
  <section
    className={classNames(styles.section, {
      [className || '']: Boolean(className)
    })}
  >
    {children}
  </section>
);

export default Section;
