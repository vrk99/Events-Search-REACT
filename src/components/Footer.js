import React from 'react'

function Footer(props) {
  return (
    <div className="Footer">
      Built With REACT <span><img src={props.reactLogo} className="react-logo" /></span>
    </div>
  )
}

export default Footer;