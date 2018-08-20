import { Detail} from './detailPresentational';
import { connect } from 'react-redux';
import * as stateActions from "../../actions/actions.js";

const mapStateToProps = state => {
    let data = {
        productDetail: state.productDetail.productDetail,
        loader: state.loader.loader,
        error: state.error.error
    };
    return data;
};
const mapDispatchToProps = dispatch =>({
    getProductDetail: (_id) => dispatch(stateActions.fetchProductDetail(_id))
});
export default connect(mapStateToProps, mapDispatchToProps)(Detail);