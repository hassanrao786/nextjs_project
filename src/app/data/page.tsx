
import React from 'react'

const getData = async () => {
    const fetchData = await fetch(`https://simple-books-api.glitch.me/books`,{
        cache: 'no-store'
    })
    const res = fetchData.json()
    return res
}

const Data = async() => {
    const data = await getData()

  return (
    <div>
       
        {
            data.map((item:any)=>{
                return(
                    <div key={item.id}>
                        <div>{item.name}</div>
                    </div>
                )
            })
        }
    </div>
  )
}





export default Data





