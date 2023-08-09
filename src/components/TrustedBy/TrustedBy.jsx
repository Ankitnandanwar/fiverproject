import React from 'react'
import "./TrustedBy.scss"
import google from "../../images/google.png"
import facebook from "../../images/facebook.png"
import instagram from "../../images/instagram.png"
import netflix from "../../images/netflix.png"
import paypall from "../../images/paypal.png"
import twitter from "../../images/twitter.png"


const TrustedBy = () => {
  return (
    <div className='trustedby'>
        <div className="container">
            <span>Trusted By:</span>
            <img src={google} alt="google" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={netflix} alt="netflix" />
            <img src={paypall} alt="paypall" />
            <img src={twitter} alt="twitter" />

        </div>
    </div>
  )
}

export default TrustedBy