import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    decrement,
    incrementIfOdd,
    set,
} from '../store/modules/counter';
import Helmet from 'react-helmet';
import './style.scss';

const Counter = ({ counter, posts }) => {
    const [date, setData] = React.useState(null);

    const dispatch = useDispatch();

    function handleChange(date) {
        setData(date);
    }

    return (
        <>
            <Helmet title={posts[0].title}>
                <meta name='description' content={posts[3].title} />
            </Helmet>
            <p className='counter'>
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
