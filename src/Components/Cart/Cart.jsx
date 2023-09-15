/* eslint-disable react/jsx-key */
import PropTypes from 'prop-types'
const Cart = ({selectedCourse}) => {
    console.log(selectedCourse)
    return (
        <div>
            <h2>This is cart</h2>
            {
                selectedCourse.map(course => (<ol key={course.id}>
                    <li>{course.title}</li>
                </ol>))
            }
        </div>
    );
};

Cart.propTypes = {
    selectedCourse : PropTypes.array.isRequired
}

export default Cart;