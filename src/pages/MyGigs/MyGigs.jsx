import React from 'react'
import './MyGigs.scss'
import {Link} from 'react-router-dom'
import { MdDelete } from "react-icons/md";

const MyGigs = () => {
  return (
    <div className='mygigs'>
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to='/add'><button> Add New Gig</button></Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><MdDelete/></td>
          </tr>

          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><MdDelete/></td>
          </tr>

          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><MdDelete/></td>
          </tr>

          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><MdDelete/></td>
          </tr>

          <tr>
            <td><img src="https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg" alt="" /></td>
            <td>Gig1</td>
            <td>88</td>
            <td>123</td>
            <td><MdDelete/></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default MyGigs