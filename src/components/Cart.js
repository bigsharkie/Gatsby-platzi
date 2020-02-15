import React, { useContext, useState, useEffect } from'react'
import { Link } from'gatsby'
import { Button, StyledCart } from'../styles/components'
import priceFormat from'../utils/priceFormat'
import { CartContext } from'../context'

export default function Cart() {
    const { cart } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [stripe, setStripe] = useState()

    const getTotal = () => {
        setTotal(
            cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
        )
    }

    useEffect ( () => {
        setStripe(
            window.Stripe(process.env.GATSBY_STRIPE_PK, {betas:['checkout_beta_4']})
        )
        getTotal()
    }, [])

    const handleSubmit = async e => {
        e.preventDefault()

        const { error } = await stripe.redirectToCheckout({
            items: cart.map(({ sku, quantity }) => ({ sku, quantity })),
            successUrl: process.env.GATSBY_SUCCESS_REDIRECT,
            cancelUrl: process.env.GATSBY_CANCEL_REDIRECT,
        });
    
        if (error) throw error;
    }
    return (
        <StyledCart>
            <h2>Shopping cart</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {cart.map(swag => (
                    <tr key = {swag.id}>
                        <td><img src={swag.metadata.img}alt={swag.name} /> {swag.name}</td>
                        <td>AUD {priceFormat(swag.price)}</td>
                        <td>{swag.quantity}</td>
                        <td>{priceFormat(swag.quantity * swag.price)}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <nav>
                <div>
                    <h3>Subtotal: </h3>
                    <small>AUD {priceFormat(total)}</small>
                </div>
                <div>
                    <Link to='/'>
                        <Button type='outline'>Go Back</Button>
                    </Link>
                    <Button onClick={handleSubmit} disabled={cart.length===0}>Buy</Button>
                </div>
            </nav>
        </StyledCart>
    )
}