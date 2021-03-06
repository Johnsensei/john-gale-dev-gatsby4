import * as React from "react";
import '../css/custom.css';
import { SocialIcon } from 'react-social-icons';



const Footer = () => {
  return (
        <div className='footer'>
          <p style={{color: '#fff', marginTop: '25px', fontSize: '18px'}}>Connect - Contact</p>
          <div>
            <SocialIcon  url='https://github.com/Johnsensei' target='_blank' rel='noreferrer' fgColor='#fff' className='social-button'/>
            <SocialIcon  url='https://www.linkedin.com/in/johnagale/' target='_blank' rel='noreferrer' fgColor='#fff' className='social-button'/>
            <SocialIcon  url='https://twitter.com/MrJohnSensei' target='_blank' rel='noreferrer' fgColor='#fff' className='social-button'/>
          </div>
          <p>This site was coded with React, Gatsby 4, GraphQL, and deployed with AWS Amplify.</p>
          <a style={{color: '#000'}} href='https://github.com/Johnsensei/john-gale-dev-gatsby4' target='_blank' rel='noreferrer'>GitHub repo</a>
        
        </div>
    
  )
}

export default Footer;
