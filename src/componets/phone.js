import React from 'react'
import './phone.css'

export default function PhoneScreen() {

    return (
        <div className="wholecase">
      <div className='phone'>
          <h3 className='logo'>logo</h3>
          <div className="about">
              <img src="icons.jpg" alt="pic" />
              <h4>@Jost</h4>
            <p>Make heaven crowded</p>
            <p>Copy @nellyisange</p>
            <p>🤍GRACE ALONE❤️</p>
            <p>out of wordzzzzzzz🚶</p>
          </div>
          <div className="tip">
              <h4> Tip Jar🤍</h4>
          </div>
          <div className="tip">
              <h4>
                  <span><i class="fa-brands fa-instagram"></i></span> Instagram</h4>
          </div>
          <div className="sub">
            <h4>Subscribe here 👇</h4>
                    <div className="input">
              <input type="text" className="email" placeholder="Email"/>
              <button className='btn'>Subscribe</button>
          </div>
          </div>
  
    </div>
      </div>
    )

}

