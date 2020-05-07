import React, { Component } from 'react';
import SharedSnackbar from './SharedSnackbar.component';

const SharedSnackbarContext = React.createContext();

export class SharedSnackbarProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      message: '',
    };
  }

  openSnackbar = (message) => {
    this.setState({
      message,
      isOpen: true,
    });
  };

  closeSnackbar = () => {
    this.setState({
      message: '',
      isOpen: false,
    });
  };

  render() {
    const { children } = this.props;

    // For lack of a better term, value is the "API" for the shared snackbar component
    return (
      <SharedSnackbarContext.Provider
        value={{
          openSnackbar: this.openSnackbar,
          closeSnackbar: this.closeSnackbar,
          snackbarIsOpen: this.state.isOpen,
          message: this.state.message,
        }}
      >
        {/* TODO: Render Snackbar presentation component here 
            Eventually we'll be rendering the actual snackbar within the 
            providers render function as a sibling to its children.  
            This ensures that when the provider is rendered, all children
            will be using the same exact snackbar component.
        */}
        <SharedSnackbar />

        {children}
      </SharedSnackbarContext.Provider>
    );
  }
}

export const SharedSnackbarConsumer = SharedSnackbarContext.Consumer;
