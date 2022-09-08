import { BsFileEarmarkBarGraph } from 'react-icons/bs'
import React from 'react'
import { Link } from 'react-router-dom'

const handelClicEvent = () => {
  console.log('cliked')
}

const GraphIcon = () => {
  return (
    <div>
      <Link to="/statistic">
        <BsFileEarmarkBarGraph
          className="iconGraps"
          onClick={handelClicEvent}
        ></BsFileEarmarkBarGraph>
      </Link>
    </div>
  )
}

export default GraphIcon
