/**
 * CheckoutDrawerContext is imported into this file.  To gain access to the values of this
 * context, the constant checkoutDrawer is created, and CheckoutDrawerContext is 
 * wrapped in the userContext hook.  This gives access to the values within the 
 * CheckoutDrawerContext.
 */

import React, { useContext } from 'react'
import { orderItems } from '../../../../somewhere-way-up-above.js'
import { CheckoutDrawerContext } from "./context-with-hooks-context-provider";

export const CheckoutSummaryDetails = props => {
    const {summaryDetails, userInfo, items } = props
    const checkoutDrawer = useContext(CheckoutDrawerContext)

    const placeOrder = async() => {
        const executionResponse = await orderItems(userInfo, items)
        if(executionResponse === 'successfully placed order') {
            checkoutDrawer.toggleCheckoutDrawer
        }
    }

    return(
        ///  THE SHOPPING CART
    )
}