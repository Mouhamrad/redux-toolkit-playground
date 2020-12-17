//view list of albums

import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAlbum } from "./../action/albumAction";
import Album from "./album";

class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbum();
  }

  render() {
    return this.props.albumsData.albums.map(item => {
      return <Album item={item} />;
    });
  }
}

const mapStateToProps = state => {
  return {
    albumsData: state.albums
  };
};
export default connect(
  mapStateToProps,
  { fetchAlbum }
)(Albums);
