import React from 'react'
import {Link} from 'gatsby'
import formatprice from '../utils/priceFormat'
import {StyledProducts} from '../styles/components'

export default function Products({products}) {
    return (
        <StyledProducts>
            <h2>Products</h2>
            <section>
                {products.map(({node}) => {
                    const price = formatprice(node.price)
                    return (
                        <article key={node.id}>
                            <img src={node.product.metadata.img} alt={node.product.name} />
                            <p>{node.product.name}</p>
                            <small>AUD {price}</small>
                            <Link to={`/${node.id}`}>
                                Buy <span>✔</span>
                            </Link>
                        </article>
                        )
                    } )
                }
            </section>
        </StyledProducts>
    )
}