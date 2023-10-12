'use client';
import Link from 'next/link';
import menus from '~/infrastructure/ui/atoms/Menu';
import Section from '~/infrastructure/ui/atoms/Section';
import { Iconify } from '~/shared/ui/components/Iconify';
import LogoFooter from '~/infrastructure/ui/atoms/Logo/Footer';
import { Box, Divider, IconButton, Typography } from '@mui/material';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Section className={styles.container}>
      <Box className={styles.top}>
        <LogoFooter />
        <Box className={styles.socials}>
          <IconButton>
            <Iconify icon="mdi:facebook" />
          </IconButton>
          <IconButton>
            <Iconify icon="mdi:youtube" />
          </IconButton>
          <IconButton>
            <Iconify icon="mdi:instagram" />
          </IconButton>
          <IconButton>
            <Iconify icon="mdi:whatsapp" />
          </IconButton>
        </Box>
      </Box>
      <Divider className={styles.divider} />
      <Box className={styles.bottom}>
        <Box className={styles.item}>
          <Typography variant="h3">
            <Link href="#" passHref>
              Nous joindre
            </Link>
          </Typography>
          <ul>
            <li>
              <Link href="#" passHref>
                <span>Tel:</span> +225 xx xx xx xx xx
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <span>Email:</span> contact@vamos.com
              </Link>
            </li>
            <li>
              <Link href="#" passHref>
                <span>Adresse:</span> Abidjan, Cocody, Faya
              </Link>
            </li>
          </ul>
        </Box>
        <Box className={styles.item}>
          {menus.map((menu, i) =>
            menu.link === '/' ? null : (
              <Typography key={i} variant="h3">
                <Link href={menu.link} passHref>
                  {menu.title}
                </Link>
              </Typography>
            )
          )}
        </Box>
      </Box>
    </Section>
  </footer>
);

export default Footer;
