import { Button, Modal, Box, Typography } from '@mui/material';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { removeStyle } from '../../styles/user/UserProfile';
import { UserProfileData } from '../../types/types';
import { deleteUser } from '../ApiController/configureUserInfo';

export type RemoveuserProps = {
  controlRemove: { setIsRemoving: Dispatch<SetStateAction<boolean>>; isRemoving: boolean };
  setIsRemoving?: Dispatch<SetStateAction<boolean>>;
  isRemoving?: boolean;
};

export default function RemoveUser({ controlRemove }: RemoveuserProps) {
  const [userData, setUserData] = useState({});
  const { setIsRemoving, isRemoving } = controlRemove;

  // const handleOpenPopUp = () => (setIsRemoving as (arg0: boolean) => void)(true);

  const handleClosePopUp = () => (setIsRemoving as (arg0: boolean) => void)(false);

  const handleSubmitPopUp = () => {
    const res = deleteUser(
      (userData as UserProfileData).token as string,
      (userData as UserProfileData).id as string
    );
    res;

    handleClosePopUp();
  };

  useEffect(() => {
    setUserData((e) => ({ ...e, token: localStorage.getItem('token') }));
    setUserData((e) => ({ ...e, id: localStorage.getItem('userId') }));
  }, []);

  return (
    <>
      <Modal
        open={isRemoving as boolean}
        onClose={handleClosePopUp}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={removeStyle.popUp}>
          <Typography variant="h5" id="parent-modal-title">
            Deleting your profile
          </Typography>
          <Typography variant="subtitle2" id="parent-modal-description">
            Are you sure to delete?
          </Typography>
          <Box sx={removeStyle.flex}>
            <Button variant="contained" onClick={handleSubmitPopUp}>
              Confirm
            </Button>
            <Button variant="contained" color="error" onClick={handleClosePopUp}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
