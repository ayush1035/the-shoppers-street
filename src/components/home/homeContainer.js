import { Home } from './homePresentational';
import * as stateActions from "../../actions/actions.js";
import { connect } from 'react-redux';


const mapStateToProps = state => {
    let data = {
        products: state.products.products,
        error: state.error.error,
        loader: state.loader.loader
    };
    return data;
};
const mapDispatchToProps = dispatch => ({
    getProducts: (page) => dispatch(stateActions.fetchProducts(page))
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);