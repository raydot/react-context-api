import CheckoutDrawerContext from './context-with-hooks';

<CheckoutDrawerContext.Provider value={{ showDrawer, toggleCheckoutDrawer }}>
  <section className="cart-checkout">
    <CartDrawer show={showDrawer} selectedCartItems={selectedCartItems} />
  </section>
</CheckoutDrawerContext.Provider>;

/**
 * Child components nested within CartDrawer need access to the values the
 * CheckoutDrawerContext.Provider contains -- in this case, the showDrawer
 * state and the toggleCheckoutDrawer() function.
 */
