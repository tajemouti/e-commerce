import React from 'react'
import './description_box.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="description-box-navigator">
          <div className="description-box-nav-box">Description</div>
          <div className="description-box-nav-box fade">Reviews (93)</div>
        </div>
        <div className="description-box-description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quae aliquam, libero veritatis natus molestias a voluptatibus exercitationem nesciunt quia modi porro tempore, iure fugiat nulla dolores illum magnam. Fuga?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis consequuntur aliquid dicta ducimus autem cum dolorem, praesentium iusto eum vel minima inventore nisi voluptates magnam soluta temporibus. Tempora, iste dolore?
          </p>
        </div>
    </div>
  )
}

export default DescriptionBox