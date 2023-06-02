import React from 'react'
import "./Footerstyles.css"
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Amazon</h1>
          <p>Choose your favourite market place.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square" />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubshoot</a>
          <a href="/">Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Footer