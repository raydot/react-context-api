/**
 * Using the useState() hook, showDrawer is created as a piece of state along with
 * its setter to update the boolean setShowDrawer.
 *
 * The function toggleCheckoutDrawer() switches the value of showDrawer to its opposite.
 */

const [showDrawer, setShowDrawer] = useState(false);

const toggleCheckoutDrawer = () => {
  setShowDrawer(!showDrawer);
};
