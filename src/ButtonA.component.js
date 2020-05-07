import { Button } from '@material-ui/core';
import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';

const styles = {
  button: {
    margin: 8,
  },
};

const ButtonA = () => (
  <SharedSnackbarConsumer>
    {({ openSnackbar }) => (
      <Button
        style={styles.button}
        variant="outlined"
        color="primary"
        onClick={() => openSnackbar('Hello from Button A!')}
      >
        Button A
      </Button>
    )}
  </SharedSnackbarConsumer>
);

export default ButtonA;
