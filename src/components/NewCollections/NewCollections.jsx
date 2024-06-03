import React from 'react'
import './new_collections.css'
import new_collection from '../assets/new_collections'
import Item from './Item/Item'

const NewCollections = () => {
  return (
    <div className='new_collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collection.map(() => {
                return <Item />
            })}
        </div>
    </div>
  )
}

export default NewCollections