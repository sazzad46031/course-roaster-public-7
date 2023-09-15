/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types'
import './Cart.css'
// eslint-disable-next-line react/prop-types
const Cart = ({selectedCourse, remaining, totalCredit}) => {
    console.log(selectedCourse)
    return (
        <div>
            <h3 className='remaining'>Credit Hour Remaining {remaining} hr</h3>
            
            <h3 className='course'>Course Name</h3>
            {
                selectedCourse.map(course => (
                    <li key={course.id}>{course.title}</li>
                ))
            }

            <h3 className='credit'>Total Credit Hour : {totalCredit}</h3>
        </div>
    );
};

Cart.propTypes = {
    selectedCourse : PropTypes.array.isRequired
}

export default Cart;