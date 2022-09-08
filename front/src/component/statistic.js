import React, { useState, useEffect } from 'react'
import requests from '../endpoint/requests'
import './static.css'

const getData = async () => {
  try {
    const res = await requests.get()
    // console.log('getData', res)
    return res
  } catch (err) {
    console.log(err)
  }
}
const Statistic = () => {
  // console.log('start statistic')
  const date = new Date()
  const [data, setData] = useState([])
  useEffect(() => {
    // console.log('useEffect')
    getData().then((res) => {
      setData(res)
    })
  }, [])
  return (
    <div>
      <p>Statistic</p>
      <ul>
        {data
          .filter((shop) => {
            return shop.month === date.getMonth() + 1
          })
          .map((shop, index) => {
            console.log('map1', shop)
            return (
              <ul key={shop._id} className="ul_shop" dir="rtl">
                <li>{shop.subject}</li>
                <li>{shop.Sname}</li>
                <li>{shop.price}₪</li>
                <li>{shop.date}</li>
                {shop.comment ? <li>{shop.comment}</li> : null}
              </ul>
            )
            // return <li key={shop._id}>{JSON.stringify(shop)}</li>
          })}
      </ul>
    </div>
  )
}

export default Statistic
