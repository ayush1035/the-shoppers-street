import React from 'react';
import PropTypes from 'prop-types';
import ShowMore from 'react-show-more';
import { FaRupeeSign } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
export class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.colorId = 0;
        this.storageId = 0;
        this.selectedColorId = 0;
        this.selectedStorageId = 0;
        this.handleColorClick = this.handleColorClick.bind(this);
        this.handleStorageClick = this.handleStorageClick.bind(this);
        this.state = { currObj: {} };
    }

    componentDidMount() {
        this.props.getProductDetail(this.props.match.params.id);
    }
    handleStorageClick(event) {
        this.selectedStorageId = event.currentTarget.attributes[1].value;
        let obj = {};
        for (let i = 0; i < this.props.productDetail.product_variations.length; i++) {
            if (((this.props.productDetail.product_variations[i].sign[0] == this.selectedStorageId || this.props.productDetail.product_variations[i].sign[0] == this.selectedColorId) && (this.props.productDetail.product_variations[i].sign[1] == this.selectedStorageId || this.props.productDetail.product_variations[i].sign[1] == this.selectedColorId))) {
                obj = this.props.productDetail.product_variations[i];
            }
        }
        this.setState({
            currObj:obj
        });
    }

    handleColorClick(event) {
        this.selectedColorId = event.currentTarget.attributes[1].value;
        let obj = {};
        for (let i = 0; i < this.props.productDetail.product_variations.length; i++) {
            if (((this.props.productDetail.product_variations[i].sign[0] == this.selectedStorageId || this.props.productDetail.product_variations[i].sign[0] == this.selectedColorId) && (this.props.productDetail.product_variations[i].sign[1] == this.selectedStorageId || this.props.productDetail.product_variations[i].sign[1] == this.selectedColorId))) {
                obj = this.props.productDetail.product_variations[i];
            }
        }
        this.setState({
            currObj:obj
        });
    }

    componentWillReceiveProps(props) {
        if(props.productDetail.success)
        {
            debugger;
            this.setState({
                currObj: props.productDetail.currObj
            })
             this.colorId = props.productDetail.attributes[1]._id;
            this.storageId = props.productDetail.attributes[0]._id;
            for (let i = 0; i < props.productDetail.options.length; i++) {
                let attrib_id = props.productDetail.options[i].attrib_id;
                if (attrib_id == this.colorId) {
                    if (props.productDetail.options[i]._id == props.productDetail.selected_option_ids[0] || props.productDetail.options[i]._id == props.productDetail.selected_option_ids[1]) {
                        this.selectedColorId = props.productDetail.options[i]._id
                    }
                }
                if (attrib_id == this.storageId ) {
                    if (props.productDetail.options[i]._id == props.productDetail.selected_option_ids[0] || props.productDetail.options[i]._id == props.productDetail.selected_option_ids[1]) {
                        this.selectedStorageId = props.productDetail.options[i]._id
                    }
                }
            }
        }
        
    }

    render() {
        if (this.props.loader == false) {
            if (this.props.productDetail.success&&this.state.currObj.name) {
                
                return (
                    <div className="container">
                        <div className="row  leftDetail">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Carousel>
                                            {this.state.currObj.images.map((image) => (
                                                <div>
                                                    <img src={image} />

                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h2 className="productName">{this.state.currObj.name}</h2>
                                        <span className=" btn-sm btn-success">In stock</span>
                                        <hr />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <ShowMore lines={3} more='Show more' less='Show less' anchorClass='' className="productDesc">
                                            {this.props.productDetail.primary_product.desc}
                                        </ShowMore>
                                        <hr />
                                    </div>
                                    <div className="col-md-12">
                                        <FaRupeeSign className="salePrice" /><span className="salePriceSpan" >{this.state.currObj.sale_price} <span className="markPrice1">inclusive of all taxes</span></span>
                                        <br />
                                        <span className="markPrice"><FaRupeeSign /><strike>{this.state.currObj.mark_price}</strike></span>
                                        <br />
                                        <div className="discount">You get exclusive {this.state.currObj.sale_msg}</div>
                                        <hr />
                                    </div>
                                    <div className="col-md-12">
                                        <h5 className="colorVary">Color Variants</h5>
                                        {this.props.productDetail.options.map((option) => {
                                            if (option.attrib_id == this.colorId) {
                                                if (option._id == this.selectedColorId) {
                                                    return (<span className="btn selectedColorSpan" >{option.name}</span>)
                                                }
                                                else
                                                    return (<span className="btn colorSpan" colorID={option._id} onClick={this.handleColorClick}>{option.name}</span>)
                                            }
                                        })}
                                        <hr />
                                    </div>

                                    <div className="col-md-12">
                                        <h5 className="colorVary">Size Variants</h5>
                                        {this.props.productDetail.options.map((option) => {
                                            if (option.attrib_id == this.storageId) {
                                                if (option._id == this.selectedStorageId) {
                                                    return (<span className="btn selectedStorageSpan">{option.name}</span>)
                                                }
                                                else
                                                    return (<span className="btn storageSpan" storageId={option._id} onClick={this.handleStorageClick}>{option.name}</span>)
                                            }
                                        })}
                                        <hr />
                                    </div>

                                    <div className="col-md-12">
                                        <button className="btn btn-primary cartButton">
                                            ADD TO CART
                                            </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            else {
                return null;
            }

        }
        else {
            return null;
        }
    }
}
Detail.propTypes = {
    getProductDetail: PropTypes.func,
    prouctDetail: PropTypes.object,
    error: PropTypes.string,
    isLoader: PropTypes.bool,
};
