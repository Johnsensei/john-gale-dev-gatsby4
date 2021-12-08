import * as React from "react"
import { Link } from "gatsby"



const NotFoundPage = () => {
  return (
    <div style={{backgroundColor: 'teal', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      
      <Link to='/' style={{color: '#fff'}}>
        Go to John's development portfolio.
      </Link>

    </div>
  )
}

export default NotFoundPage
