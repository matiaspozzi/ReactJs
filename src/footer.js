import React from 'react'
import Nav from './Nav'

const Footer = () => {
  return (
    <footer>
        <div className='SocialMedia'>
        <a href="#">https://twitter.com/</a>
        <a href="#">https://es-la.facebook.com/</a>
        <a href="#">https://www.instagram.com/</a>
        </div>
        <div>
            <p>Copyright © 1999-2022 HouseMusic S.R.L</p>
        </div>
        <div>
            <Nav/>
        </div>
    </footer>
  )
}

export default Footer