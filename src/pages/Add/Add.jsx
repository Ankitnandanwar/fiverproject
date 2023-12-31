import React from 'react'
import './Add.scss'


const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add new Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type="text" placeholder="e.g I will do something I'm really good at"/>
            <label htmlFor="">Category</label>
            <select name="categories" id="cats">
              <option value="design">Design</option>
              <option value="design">Web Development</option>
              <option value="design">Animation</option>
              <option value="design">Music</option>
            </select>
            <label htmlFor="">Cover Image</label>
            <input type="file" />
            <label htmlFor="">upload Images</label>
            <input type="file" multiple/>
            <label htmlFor="">Description</label>
            <textarea name="" id="" cols="30" rows="16" placeholder='AI works by combining large amounts of data with fast'></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input type="text" placeholder='e.g One-page web design' />
            <label htmlFor="">Short Description</label>
            <textarea name="" id="" cols="30" rows="10" placeholder='short description of your service'></textarea>
            <label htmlFor="">Delivery Tile(e.g 3 days)</label>
            <input type="number" min={1}/>
            <label htmlFor="">Revision Number</label>
            <input type="number" min={1}/>
            <label htmlFor="">Add features</label>
            <input type="text" placeholder='e.g page design' />
            <input type="text" placeholder='e.g file ipload' />
            <input type="text" placeholder='e.g settinf up adomain' />
            <input type="text" placeholder='e.g hosting' />
            <label htmlFor="">Price</label>
            <input type="number" min={1}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add