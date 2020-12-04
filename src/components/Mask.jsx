// External dependencies
import React from "react";
import {Backdrop, Box, CircularProgress, Typography} from '@material-ui/core';

const maskStyle = {
  zIndex: 99999,
  color: '#fff',
};

const Mask = ({showMask, loadingText = 'Loading Integration'}) => {
  return (
    <Backdrop className={maskStyle} open={showMask}>
      <Box position="relative" display="inline-flex">
          <CircularProgress color="inherit" />
          <Box
              top={'6rem'}
              left={0}
              bottom={0}
              right={0}
              position="fixed"
              display="flex"
              alignItems="center"
              justifyContent="center"
          >
              <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '4rem'
              }}>
                  <Typography variant="subtitle1" component="p" color="white">
                      {loadingText}
                  </Typography>
              </div>
          </Box>
      </Box>
  </Backdrop>);
};

export default Mask;