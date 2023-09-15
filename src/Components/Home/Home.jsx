/* eslint-disable react/jsx-key */
import { useState } from 'react';
import './Home.css'
import { useEffect } from 'react';
import Cart from '../Cart/Cart';
const Home = () => {
    const [allCourse, setAllCourse] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [totalCredit, setTotalCredit] = useState(0)
    const [remaining,setRemaining] = useState(0)
    
    useEffect(()=>{
        fetch('json.data')
        .then(res => res.json())
        .then(data=> setAllCourse(data))
    },[])
    const handleSelectCourse = course =>{
        const isExist = selectedCourse.find(item => item.id === course.id)
        let count = course.credit;
        if(isExist){
            return alert('this does not work')
        }
        else{
            selectedCourse.forEach((item) =>{
                count = count + item.credit
            })
            const totalRemaining = 20 - count;
            if(count > 20){
                return alert('it does not work')
            }
            else{
                setRemaining(totalRemaining)
                setTotalCredit(count)
                setSelectedCourse([...selectedCourse,course])
            }
            
        }
        
    }
    
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
                        <button onClick={()=>handleSelectCourse(course)} className='btn'>Select</button>
                    </div>))
                    }
                </div>
                <div className='cart'>
                    <Cart selectedCourse={selectedCourse} remaining={remaining} totalCredit={totalCredit}></Cart>
                </div>
            </div>
       </div>
    );
};

export default Home;