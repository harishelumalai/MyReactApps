import React, { useState } from 'react'
import './index.css'
import { FcPrevious, FcNext } from 'react-icons/fc'
import { FaQuoteRight } from 'react-icons/fa'
import reviews_list from './data.json'

function ReviewsViewer() {
  var i = 0
  const [review, setReview] = useState(reviews_list[i])
  const [ind, setind] = useState(0)

  const prevReview = () => {
    i = ind
    i--
    i === -1 ? setind(reviews_list.length - 1) : setind(i)
    setReview(reviews_list[ind])
  }

  const nextReview = () => {
    i = ind
    i++
    i === reviews_list.length ? setind(0) : setind(i)
    setReview(reviews_list[ind])
  }

  return (
    <div className='Rmain'>
      <div className='RContainer'>
        <h1>Batman vs Superman Reviews</h1>
        <section className='ReviewCard'>
          <div className='Rprofile'>
            <img
              className='ReviewerPic'
              src={review.imgurl}
              alt={review.name}
            />
          </div>
          <span className='ReviewerName'>{review.name}</span>
          <span className='Occupation'>{review.occupation}</span>
          <p className='ReviewContent'>
            {review.review_content.substring(0, 200)}
          </p>
          <div className='nav'>
            <FcPrevious className='Rarrow' onClick={prevReview} />
            <FcNext className='Rarrow' onClick={nextReview} />
          </div>
          <div
            className='Surprise'
            onClick={() => {
              setReview(
                reviews_list[
                  Math.floor(Math.random() * 10) % reviews_list.length
                ]
              )
            }}
          >
            Surprise Me
          </div>
        </section>
      </div>
    </div>
  )
}

export default ReviewsViewer
