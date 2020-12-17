//get the photo details

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhoto } from "./../action/photosAction";
import PhotoCard from "./photoCard";

class PhotosByid extends Component {
  async componentDidMount() {
    await this.props.fetchPhoto(this.props.match.params.photoId);
  }

  render() {
    const { photo } = this.props.photo;
    return (
      <div>
        <PhotoCard photo={photo} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photo: state.photo
  };
};
export default connect(
  mapStateToProps,
  { fetchPhoto }
)(PhotosByid);
