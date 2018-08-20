import React from "react";
import OneImage from "../commonComponents/oneImage.js";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroller';
import * as path from "../../constants/pathConstants.js"
import qwest from 'qwest';


export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        };
    }
    loadItems(page) {
        var self = this;

        var url =path.PATH_GET+page;

        qwest.get(url, {
                linked_partitioning: 1,
                page_size: 10
            }, {
                cache: true
            })
            .then(function(xhr, resp) {
                if(resp) {
                    var tracks = self.state.tracks;
                    resp.products.map((track) => {    
                        tracks.push(track);
                    });

                    if(page<=2) {

                        self.setState({
                            tracks: tracks,
                            nextHref:true
                        });
                    } else {
                        self.setState({
                            hasMoreItems: false
                        });
                    }
                }
            });
    }
    render() {

        var items = [];
        this.state.tracks.map((track) => {
            items.push(
                <OneImage key={track._id} obj={track} />
            );
        });
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={this.state.hasMoreItems}
            >

                <div className="tracks container">
                    {items}
                </div>
            </InfiniteScroll>
        );

    }

}
Home.propTypes = {
    products: PropTypes.array,
    error: PropTypes.string,
    loader: PropTypes.bool
};

