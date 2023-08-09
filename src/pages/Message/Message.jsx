import React from 'react'
import './Message.scss'
import {Link} from 'react-router-dom'


const Message = () => {
  return (
    <div className='message'>
      <div className="container">
        <span className="breadcrumbs">
          <Link to='/messages' className='link'>MESSAGES</Link>John Doe
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?" alt="" />
            <p>AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms,
            allowing the software to learn automatically from patterns or features in the data.</p>
          </div>

          <div className="item owner">
            <img src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?" alt="" />
            <p>AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms,
            allowing the software to learn automatically from patterns or features in the data.</p>
          </div>

          <div className="item">
            <img src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?" alt="" />
            <p>AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms,
            allowing the software to learn automatically from patterns or features in the data.</p>
          </div>

          <div className="item owner">
            <img src="https://img.freepik.com/free-photo/portrait-modern-man_23-2147960990.jpg?" alt="" />
            <p>AI works by combining large amounts of data with fast, iterative processing and intelligent algorithms,
            allowing the software to learn automatically from patterns or features in the data.</p>
          </div>

        </div>
        <hr />

        <div className="write">
          <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message