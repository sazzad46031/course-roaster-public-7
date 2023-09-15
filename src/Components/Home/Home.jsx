/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';
const Home = () => {
    const [allCourse, setAllCourse] = useState([])

    useEffect(()=>{
        fetch('json.data')
        .then(res => res.json())
        .then(data=> setAllCourse(data))
    },[])

    return (
       <div>
            <div className='home-container'>
                <div className='card-container'>
                    {
                        allCourse.map(course =>(<div key={course.id} className='card'>
                        <img src={course.img} alt="" />
                        <h3 className='title'>{course.title}</h3>
                        <p>{course.details}</p>
                        <div className='info'>
                            <p className='price'><i className="fa-solid fa-dollar-sign icon"></i>Price :  {course.price}</p>
                            <p><i className="fa-solid fa-book-open icon"></i>credit: {course.credit} hr</p>
                        </div>
                        <button className='btn'>Select</button>
                    </div>))
                    }
                </div>
                <div className='cart'>
                    <h2>this is cart</h2>
                </div>
            </div>
       </div>
    );
};

export default Home;