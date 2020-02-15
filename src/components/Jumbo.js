import React from 'react'
import { StyledJumbo } from '../styles/components'
import { HeroImage } from './'

export default function Jumbo({description}) {
    return (
        <StyledJumbo>
            <div>
                <h2>Get the best swag for Platzi</h2>
                <small>{description}</small>
            </div>
            <HeroImage name='icon' />
        </StyledJumbo>
    )
}
