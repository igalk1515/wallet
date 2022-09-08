import React from 'react'
import { useState } from 'react'
import api from '../endpoint/requests'
import GraphIcon from './icons'

const Fourm = () => {
  console.log('render')
  const [subject, setsubject] = useState('')
  const [Sname, setSname] = useState('')
  const [price, setPrice] = useState('')
  const [comment, setcomment] = useState('')
  const [date, setdate] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('submit')
    const params = {
      subject: subject,
      Sname: Sname,
      price: price,
      comment: comment,
      date: date,
    }
    try {
      const res = await api.post(params)
      console.log(res)
      if (res.status === 201) {
        setsubject('')
        setSname('')
        setPrice('')
        setcomment('')
        setdate('')
        setMessage('success')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <GraphIcon />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={subject}
          placeholder="Subject"
          onChange={(e) => setsubject(e.target.value)}
        />
        <input
          type="text"
          value={Sname}
          placeholder="Name"
          onChange={(e) => setSname(e.target.value)}
        />
        <input
          type="number"
          value={price}
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          value={comment}
          placeholder="comment"
          onChange={(e) => setcomment(e.target.value)}
        />

        <button type="submit">Submit</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  )
}

export default Fourm
