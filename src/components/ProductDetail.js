import React, { useState, useContext } from 'react'
import priceFormat from '../utils/priceFormat'
import {Tag, SizeButton, QtySelect, SizeSelect, Button, StyledProductDetail} from '../styles/components'
import { SEO, Stars } from '.'
import { CartContext } from '../context'

export default function ProductDetail({price, id, product:{name, metadata}}) {
    const formattedPrice = priceFormat(price)
    const [size, setSize]=useState(2)
    const [qty, setQty]=useState(1)
    const { addToCart } = useContext(CartContext)

    const handleSubmit = () => {
        addToCart({price,sku:id,name,metadata,quantity:qty})
    }

    return (
        <StyledProductDetail>
            <SEO title={name} />
            <img src={metadata.img} alt={name} />
            <div>
                <Tag>Popular</Tag>
                <h2>{name}</h2>
                <b>AUD { formattedPrice }</b>
                <Stars />
                {metadata.wear && <h3>Color: Azul</h3>}
                <small>{metadata.description}</small>
                {metadata.wear && (
                    <SizeSelect selected={size}>
                        <SizeButton onClick={()=> setSize(1)}>XS</SizeButton>
                        <SizeButton onClick={()=> setSize(2)}>S</SizeButton>
                        <SizeButton onClick={()=> setSize(3)}>M</SizeButton>
                        <SizeButton onClick={()=> setSize(4)}>L</SizeButton>
                    </SizeSelect>
                )}
                <QtySelect>
                    <button onClick = {()=> (qty>1 ? setQty(qty-1) : null)}>-</button>
                    <input type='text' disabled value={qty} />
                    <button onClick = {()=>  setQty(qty+1) }>+</button>
                </QtySelect>
                <Button onClick={handleSubmit}>Add to cart</Button>
            </div>
        </StyledProductDetail>
    )
}