import React, { useEffect, useState } from 'react'
import AddItem from "../AddItem"
import "./Home.css"


const apiData = [  {    "id": 1,    "title": "150Litre Chest Freezer ",    "price": "N108,000",  "condition": "USED", "image_url": "https://pictures-nigeria.jijistatic.com/106631700_ODQyLTE1MDAtYzRiY2E4MGE4Mg.webp"  },  
                      {    "id": 2,    "title": "Used MacBook Air",    "price": "N21,00",   "condition": "USED", "image_url": "https://pictures-nigeria.jijistatic.com/41412175_img-20200214-145044_1_1125x1500.webp"  },  
                      {    "id": 3,    "title": "Non-Stick Manual Deep Fryer",    "price": "N6,800",   "condition": "USED", "image_url": "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/28/713127/1.jpg?6846"  },  
                      {    "id": 4,    "title": "Children Bicycle ",    "price": "N108,000", "condition": "USED",   "image_url": "https://pictures-nigeria.jijistatic.com/75646590_MTUwMC0xMTI1LTQxZTI0YmEyODY.webp"  },  
                      {    "id": 5,    "title": "Silver Crest Blender",    "price": "N14,000",  "condition": "NEW",  "image_url": "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/25/153199/1.jpg?0410"  },  
                      {    "id": 6,    "title": "Used Nike Sneakers",    "price": "N12,000",  "condition": "USED",  "image_url": "https://pictures-nigeria.jijistatic.com/73494715_MTA4MC0xMDY0LWU3MTA0OGQ2NjMtMg.webp"  },  
                      {    "id": 7,    "title": "Spider-Man Toy",    "price": "N5000",  "condition": "USED",  "image_url": "https://pictures-nigeria.jijistatic.com/91298205_MTI0Mi0yMjA4LWNmM2Y5YjAwNzM.webp"  },  
                      {    "id": 8,    "title": "Digital Air Fryer",    "price": "₦ 30,000",  "condition": "NEW",  "image_url": "https://pictures-nigeria.jijistatic.com/90779333_OTU4LTEyODAtYmRmNmY2NDQxNC0x.webp"  },  
                      {    "id": 9,    "title": "2-Tier Shelf Rack Kitchen",    "price": "N100,000",   "condition": "USED", "image_url": "https://pictures-nigeria.jijistatic.com/78384748_NjgwLTY4MC0xOWQzNzNiNTAyLTE.webp"  },
                      {    "id": 10,    "title": "4Pcs Stock Pot Set",    "price": "N32,000",   "condition": "USED", "image_url": "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/39/3137112/1.jpg?7789"  },
                      {    "id": 11,    "title": "Industrial Food Warmer",    "price": "N120,000",  "condition": "NEW",  "image_url": "https://pictures-nigeria.jijistatic.com/113333456_NzIwLTk2MC0xNDg1YWEwZWJi.webp"  },  

                      {     "id": 12,    "title": "MacBook Pro",    "price": "N230,00",  "condition": "USED",  "image_url": "https://pictures-nigeria.jijistatic.com/99645192_MTUwMC0xMTI1LTE1NGE2MDU3MjQ.webp"  },
                      {     "id": 13,    "title": "Apple iPhone",    "price": "N32,000",  "condition": "USED",  "image_url": "https://pictures-nigeria.jijistatic.com/116823393_MTUwMC0yMDAwLWJjYzRhMjg5NGM.webp"  },
                      {     "id": 14,    "title": "Industrial Food Warmer",    "price": "N120,000",   "condition": "NEW", "image_url": "https://pictures-nigeria.jijistatic.com/113333456_NzIwLTk2MC0xNDg1YWEwZWJi.webp"  },  
                      {     "id": 15,    "title": "Pizza Oven 2-Deck",    "price": "N80,000",   "condition": "USED", "image_url": "https://pictures-nigeria.jijistatic.com/111358060_MTA4MC04MTAtMjkyOGJmYTJjZS0x.webp"  },  
                      {     "id": 16,    "title": "Reebok Zig Edge",    "price": "N30,000",   "condition": "NEW", "image_url": "https://pictures-nigeria.jijistatic.com/98747010_MTI4MC0xMjgwLTc3ODQzZGRhNWM.webp"  },  
                      {     "id": 17,    "title": "Givenchy Luzury Shoe",    "price": "N40,000",   "condition": "USED", "image_url": "https://pictures-nigeria.jijistatic.com/90221797_MTI4MC0xMjgwLTg4YjlhNWIzMjQ.webp"  },  
                      {     "id": 18,    "title": "Kids Kitchen Set",    "price": "N6,000",   "condition": "USED", "image_url": "https://pictures-nigeria.jijistatic.com/113718321_MTYwMC0yMTM0LWJkZmZlY2RiM2E.webp"  },  
                      {     "id": 19,    "title": "Techno Camon 19",    "price": "N56,000",   "condition": "USED", "image_url": "https://pictures-nigeria.jijistatic.com/115983393_MTEyNS0xNTAwLTdmMTAyYzY0YzU.webp"  },  
                      {     "id": 20,    "title": "Apple iPhone 14pro",    "price": "N130,000",   "condition": "USED", "image_url": "https://pictures-nigeria.jijistatic.com/116780994_MTA4MC0xMzA3LTA2YTliN2EwYjM.webp"  },  

                    ]



export default function HomePage() {

  const homezApp = apiData.map((values) => {
    return {
      content: `${values.title} - ${values.id}`,
      category: `${values.price}`
    }
  })
  console.log(homezApp)




  return (
    <React.Fragment>
      
      <div className="main-container">
      {
          apiData.map(items => (
            <div className="tile">
              <div className="box"
                key = {items.title}>

                <img src={items.image_url} alt="display goods here"/>
                <p className="title">{items.title}</p>
                <h5 className="price">{items.price}</h5>
                <p className="condition">{items.condition}</p>
                <div className="buy">Buy</div>

              </div>

            </div>
            
          ))
      }

    </div>

    <div className='home-page '>
        <div className='add-list flex'>
          
        </div>
          <button className='load-more fontb c333 anim s20'>
              Load More
          </button>
      </div> 



      <div className='app-ribbon flex'>
        <div>
        <img  src={require("../page-ui/declutter.jpg")} />
        </div>      
        <div className="meta">
          <h2 className='rb-title ' style={{width: "50%" }}>TRY THE HOMEZ APP</h2>
          <h2 className='rb-slogan '>Buy, sell and find just about anything using the app on your mobile</h2>
        </div>
        <div className='links'>
          <h2 className='link-title '>Get yourApp Today</h2>
          <div className='link-img'>
            <a href='#' className='noul bl'><img style={{width:"80%"}} src={require("../page-ui/app-store-get-google.jpg") } /></a>
          </div>
        </div>
      </div>
    </React.Fragment>
    
    
  )
}
