import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';
import Counter from '../components/Counter';
import * as CounterActions from '../actions';
import { fetchCounter } from '../api/counter';
import { set } from '../store/modules/counter';

const mapStateToProps = (state) => ({
    counter: state.counter.counter,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}

Counter.getInitialProps = async ({ store }) => {
    const count = await fetchCounter();
    store.dispatch(set(count));
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const json = await res.data;

    return { posts: json };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
