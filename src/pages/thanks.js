import React from 'react'
import {SEO} from '../components'
import {Button, Purchase} from '../styles/components'
import {Link} from 'gatsby'


export default function thanks() {
    return (
        <>
            <SEO title='Successful purchase' />
            <Purchase>
                <h2>Succesful purchase</h2>
                <p>Thanks mate</p>
                <span role='img' aria-label='emoji'>❤</span>
                <Link to ='/'>
                    <Button>Back</Button>
                </Link>
            </Purchase>            
        </>
    )
}
