//view the list of selected photos in wishlist

import React, { Component } from "react";
import { connect } from "react-redux";
import Photo from "./photo";
import { Link } from "react-router-dom";

const Wishlist = props => {
  const styleDisplay = {
    display: "flex",
    flexWrap: "wrap",
    flexGrow: "3"
  };

  return props.photo.length > 0 ? (
    <div style={styleDisplay}>
      {props.photo.map((item, idx) => {
        return (
          <Link to={`/photos/${item.id}`}>
            <Photo item={item} idx={idx} />
          </Link>
        );
      })}
    </div>
  ) : (
    <h1 style={{ marginLeft: "500px" }}>you have not selected any photos</h1>
  );
};

const mapStateToProps = state => {
  return {
    photo: state.photo.wishlist
  };
};
export default connect(mapStateToProps)(Wishlist);
