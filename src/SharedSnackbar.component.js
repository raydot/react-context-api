/**
 * The presentation component responsible for rendering the snackbar UI
 * based on the state of the provider.  This component will use the consumer
 * to access the properties it needs for rendering.
 */

/**
 * Here we've built a component that renders the snackbar UI in a function
 * within the SharedSnackbarConsumer component.  The argument to the
 * function is the value prop object we exposed from our provider.
 * As a result, when the state of the provider is updated, it will
 * trigger the snackbar component to rerender.
 */

import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';

const SharedSnackbar = () => (
  <SharedSnackbarConsumer>
    {({ snackbarIsOpen, message, closeSnackbar }) => (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={snackbarIsOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        message={message}
        action={[
          <IconButton key="close" color="inherit" onClick={closeSnackbar}>
            <Close />
          </IconButton>,
        ]}
      />
    )}
  </SharedSnackbarConsumer>
);

export default SharedSnackbar;
