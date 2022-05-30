import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import '../Styles/Footer.css'
function Footer() {
    return (
        <div className="footer">
        <div className="socialMedia">
        <InstagramIcon/>
        <FacebookIcon/>
        <LinkedInIcon/>
         <TwitterIcon/>
        </div>
            <p>&copy; 2021 Ram IT Services</p>
        </div>
    )
}

export default Footer
