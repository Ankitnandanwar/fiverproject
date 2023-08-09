import React from 'react'
import './Messages.scss'
import {Link} from 'react-router-dom'

const Messages = () => {


  const message = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  return (
    <div className='messages'>
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr className='active'>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className='active'>
            <td>Maria Adams</td>
            <td><Link to='/message/123' className='link'>{message}</Link></td>
            <td>1 day ago</td>
            <td><button>Mark as Read</button></td>
          </tr>

          <tr>
            <td>Maria Adams</td>
            <td><Link to='/message/123' className='link'>{message}</Link></td>
            <td>1 day ago</td>
            <td><button>Mark as Read</button></td>
          </tr>

          <tr>
            <td>Maria Adams</td>
            <td><Link to='/message/123' className='link'>{message}</Link></td>
            <td>1 day ago</td>
          </tr>

          <tr>
            <td>Maria Adams</td>
            <td><Link to='/message/123' className='link'>{message}</Link></td>
            <td>1 day ago</td>
          </tr>

          <tr>
            <td>Maria Adams</td>
            <td><Link to='/message/123' className='link'>{message}</Link></td>
            <td>1 day ago</td>
          </tr>

          
        </table>
      </div>
    </div>
  )
}

export default Messages