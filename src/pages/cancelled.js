import React from "react"
import { Link } from "gatsby"
import { SEO } from "../components"
import {Button, Purchase} from '../styles/components'


const cancelled = () => (
  <>
    <SEO title="Cancelled purchase" />
            <Purchase>
                <h2>Sorry, the purchase wasn't completed</h2>
                <p>Welcome any time to try again</p>
                <span role='img' aria-label='emoji'>❤</span>
                <Link to ='/'>
                    <Button>Back</Button>
                </Link>
            </Purchase>      
  </>
)

export default cancelled
