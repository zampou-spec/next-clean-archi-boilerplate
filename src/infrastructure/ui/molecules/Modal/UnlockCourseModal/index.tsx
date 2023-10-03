import { useRouter } from 'next/navigation';
import { Typography, Box } from '@mui/material';
import Image from '~/infrastructure/ui/atoms/Image';
import { Children, cloneElement, ReactElement } from 'react';
import { infosType } from '~/infrastructure/ui/organismes/Player';
import { makePaymentMutationType, useMakePayment } from '~/infrastructure/api';
import { Modal, ModalOpenButton, ModalProvider } from '~/shared/ui/components';

import styles from './UnlockCourseModal.module.scss';

type AddSoldProps = {
  infos: infosType;
  button: ReactElement;
};

const UnlockCourseModal = ({ infos, button }: AddSoldProps) => {
  const router = useRouter();
  const { mutate: makePayment } = useMakePayment((data) => {
    router.push(data.link);
  });

  const buyCourse = () => {
    const data: makePaymentMutationType = {
      course_id: infos.id,
      subscribe_type: 'online'
    };

    makePayment(data);
  };

  return (
    <ModalProvider>
      <Modal width="450px" title="Deverouiller le cours">
        <Image alt="course card" src={infos?.image} className={styles.img} />
        <Box className={styles.unlockCourseModal}>
          <Typography variant="h4">{infos?.title}</Typography>
          <Box className={styles.price}>
            <Typography variant="h6">Prix:</Typography>
            <Typography variant="body1">{infos.price_online} FCFA</Typography>
          </Box>
          <Typography className={styles.description} variant="body1">
            {infos?.description}
          </Typography>
          {Children.only(
            cloneElement(button, {
              fullWidth: true,
              onClick: buyCourse,
              style: { marginTop: '10px' }
            })
          )}
        </Box>
      </Modal>
      <ModalOpenButton>{button}</ModalOpenButton>
    </ModalProvider>
  );
};

export default UnlockCourseModal;
