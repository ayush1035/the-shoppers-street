import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
class OneImage extends React.Component {
    render() {
        return (
            
                <div className="card cardDiv col-md-2 col-xs-6" >
                    <img className="card-img-top cardImg" src={this.props.obj.images[0]} alt="Card "   width="200px" height="200px"/>
                    <div className="card-body">
                        <h5 className="card-title cardName">{this.props.obj.name}</h5>
                        <p className="card-text cardPrice">Rs.{this.props.obj.sale_price}</p>
                        <NavLink className="btn btn-success btnView" activeStyle={{ color: 'white', textDecoration: 'none'}} to={"/details/" + this.props.obj._id}>More Details</NavLink> 
                    </div>
                </div>
               
        
        );
    }

}
OneImage.propTypes = {
    obj: PropTypes.object
};
export default OneImage;