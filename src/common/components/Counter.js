import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    incrementIfOdd,
    set,
} from '../store/modules/counter';
import { DatePicker, message, Alert } from 'antd';
import Helmet from 'react-helmet';
import './style.scss';

const Counter = ({ counter, posts, mosques }) => {
    const [date, setData] = React.useState(null);

    const dispatch = useDispatch();

    function handleChange(date) {
        setData(date);
    }

    return (
        <>
            <Helmet title={mosques[0].name}>
                <meta name='description' content={posts[3].title} />
            </Helmet>
            <p className='counter'>
                <div style={{ marginTop: 20 }}>
                    <DatePicker onChange={handleChange} />
                    <Alert
                        message={`Selected Date: ${
                            date ? date.format('YYYY-MM-DD') : 'None'
                        }`}
                        type='success'
                    />
                </div>
                Clicked: {counter} times{' '}
                <button onClick={() => dispatch(increment)}>+</button>{' '}
                <button onClick={() => dispatch(decrement)}>-</button>{' '}
                <button onClick={() => dispatch(incrementIfOdd)}>
                    Increment if odd
                </button>{' '}
                <button onClick={() => dispatch(incrementAsync)}>
                    Increment async
                </button>
                {posts.map((post, i) => (
                    <div>{post.title}</div>
                ))}
            </p>
        </>
    );
};

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
};

export default Counter;
