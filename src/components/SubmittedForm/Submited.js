import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const SubmittedModal = ({ open }) => {
  return (
    <Modal open={open}>
      <Box
        sx={{
          position: 'absolute',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 2,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        Form submitted. Redirecting...
      </Box>
    </Modal>
  );
};

export default SubmittedModal;
