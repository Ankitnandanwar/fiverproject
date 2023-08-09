import React from 'react'
import './Orders.scss'
import { FcBusinessContact } from "react-icons/fc";

const Orders = () => {
  return (
    <div className='orders'>
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Buyer</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Maria Adams</td>
            <td>88</td>
            <td>Kevin Nash</td>
            <td><FcBusinessContact style={{fontSize:"30px"}}/></td>
          </tr>

          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Maria Adams</td>
            <td>88</td>
            <td>Kevin Nash</td>
            <td><FcBusinessContact style={{fontSize:"30px"}}/></td>
          </tr>

          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Maria Adams</td>
            <td>88</td>
            <td>Kevin Nash</td>
            <td><FcBusinessContact style={{fontSize:"30px"}}/></td>
          </tr>

          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Maria Adams</td>
            <td>88</td>
            <td>Kevin Nash</td>
            <td><FcBusinessContact style={{fontSize:"30px"}}/></td>
          </tr>

          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Maria Adams</td>
            <td>88</td>
            <td>Kevin Nash</td>
            <td><FcBusinessContact style={{fontSize:"30px"}}/></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Orders