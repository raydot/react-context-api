/**
 * Create a particular instance of Context and assign some default values
 * When React renders a component that subscribes to this
 * CheckoutDrawerContext object it will read the current context values
 * from the closest matching Provider above it in the tree.
 *
 * The default "showDrawer" value is only used when a component does not
 * have a matching Provider above it in the tree.
 */

import { createContext } from 'react';

const CheckoutDrawerContext = createContext({
  showDrawer: false,
  toggleCheckoutDrawer: () => {},
});

export default CheckoutDrawerContext;
