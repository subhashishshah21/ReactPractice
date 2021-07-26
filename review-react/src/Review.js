import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const checkitems = (number)=>{
    if(number > people.length -1){
      return 0;
    }
    if(number < 0){
      return people.length -1;
    }
    return number;
  }
  const randomNum = () =>{
    let random = Math.floor(Math.random()*people.length);
    if(random ===index){
      random = index + 1;
    }
    setIndex(checkitems(random));
  }
  const nextitem = () => {
    setIndex(()=>{
      let newIndex = index + 1;
      return checkitems(newIndex);
    })
  }
  const previtem = () => {
    setIndex(()=>{
      let newIndex = index - 1;
      return checkitems(newIndex);
    })
  }
  const { name, job, image, text } = people[index];
  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon"><FaQuoteRight /></span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="btn-container">
      <button className="prev-btn" onClick={previtem}>
        <FaChevronLeft />
      </button>
      <button className="next-btn" onClick={nextitem}>
        <FaChevronRight />
      </button>
    </div>
    <button className="random-btn" onClick={randomNum}>Suprise me</button>


  </article>;
};

export default Review;
