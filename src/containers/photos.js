//view list of photos from each album

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "../action/photosAction";
import Photo from "./photo";
import { Link } from "react-router-dom";
class Photos extends Component {
  componentDidMount() {
    this.props.fetchPhotos(this.props.match.params.albumId);
  }
  render() {
    let { dataPhotos } = this.props.albums;
    return (
      <div style={{ display: "flex", flexWrap: "wrap", flexGrow: "3" }}>
        {dataPhotos.map((item, idx) => {
          return (
            <Link to={`/photos/${item.id}`}>
              <Photo item={item} idx={idx} />
            </Link>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    albums: state.photos
  };
};
export default connect(
  mapStateToProps,
  { fetchPhotos }
)(Photos);
