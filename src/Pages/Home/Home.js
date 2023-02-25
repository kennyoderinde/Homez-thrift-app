import React, { useEffect, useState } from 'react'
import AddItem from "../AddItem"


export default function HomesPage() {

  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    if(loading){
      let _list = [] 
      for(let i=0; i < 12; i++) {
        _list.push(<AddItem placeholder={true} />);
  
      }
      setList(_list);
    }

  }, list )




  return (
    <React.Fragment>
      <div className='home-page '>
        <div className='add-list flex'>
          {list}
        </div>
          <button className='load-more fontb c333 anim s20'>
              Load More
          </button>
      </div>

      <div className='app-ribbon flex'>
        <div className='img'>
        <img  src={require("../page-ui/declutter.jpg")} style={{width:"80%"}}/>
        </div>
        <div className="meta">
          <h2 className='title fontb s20 color'>TRY THE HOMEZ APP</h2>
          <h2 className='slogan font s18 color'>Buy, sell and find just about anything using the app on your mobile</h2>
        </div>
        <div className='links'>
          <h2 className='title fontb s30 color'>Get yourApp Today</h2>
          <div className='flex as'>
            <a href='#' className='noul bl'><img style={{width:"80%"}} src={require("../page-ui/app-store-get-google.jpg") } /></a>
          </div>
        </div>
      </div>
    </React.Fragment>
    
    
  )
}
