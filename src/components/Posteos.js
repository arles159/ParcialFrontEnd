import React from 'react'
import data from './data.json'
import Post from './Post'


export default function Posteos({ totalMeGusta }) {
  return (
    <div className='container'>
      {
        data.map(e => (
      <Post
      key= {e.id}
      id= {e.id}
      titulo= {e.titulo}
      texto= {e.texto} 
      meGustaProps= {e.likes}
      totalMeGusta={totalMeGusta}/>
        ))}
        </div>
        )
}
