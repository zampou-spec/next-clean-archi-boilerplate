import { Iconify } from '~/shared/ui/components/Iconify';
import Image from '~/infrastructure/ui/atoms/Image';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';

import styles from './TeamCard.module.scss';

const TeamCard = () => (
  <Card className={styles.teamCard}>
    <CardContent className={styles.cardContent}>
      <Box className={styles.imgContainer}>
        <Image alt="" src="https://placehold.co/400.webp" className={styles.img} />
      </Box>
      <Box className={styles.description}>
        <Typography variant="h4">Jean Yve Benoird</Typography>
        <Typography variant="body1"> Coach de Salsa</Typography>
      </Box>
      <Box className={styles.socials}>
        <IconButton size="small" className={styles.iconButton}>
          <Iconify icon="mdi:facebook" fontSize={24} />
        </IconButton>

        <IconButton size="small" className={styles.iconButton}>
          <Iconify icon="mdi:instagram" fontSize={24} />
        </IconButton>

        <IconButton size="small" className={styles.iconButton}>
          <Iconify icon="mdi:twitter" fontSize={24} />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
);

export default TeamCard;
