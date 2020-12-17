//show the photo details

import React from "react";
import { PHOTOS } from "./../action/types";
import { connect } from "react-redux";
import styled from "styled-components";

const PhotoId = (props, onAddPhoto = () => {}) => {
  const CardWrappper = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    font-family: "Raleway", sans-serif;
  `;
  const Card = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1fr;
    padding: 2.5em 0;
    margin-left: 100px;
    min-width: 600px;
    margin-top: 100px;
    background-color: white;
    border-radius: 5px;
    .photo {
      position: relative;
    }

    .photo-container {
      position: absolute;
      left: -2.5em;
      display: grid;
      grid-template-rows: 1fr;
      width: 100%;
      height: 100%;
      border-radius: 6px;
      box-shadow: 4px 4px 25px -2px rgba(0, 0, 0, 0.3);
    }

    .photo-main {
      border-radius: 6px 6px 0 0;
      background-image: linear-gradient(
        to right top,
        #ffd4ed,
        #f6d1f2,
        #eacff6,
        #dccefa,
        #cccdfc,
        #bfd2ff,
        #b2d6ff,
        #a6daff,
        #a1e3ff,
        #a1ebfe,
        #a5f2fa,
        #aef9f5
      );

      img {
        position: absolute;
        top: 3em;
        max-width: 99.8%;
        filter: drop-shadow(1px 20px 10px rgba(0, 0, 0, 0.3));
      }
    }

    .photo-album {
      padding: 0.7em 1em;
      border-radius: 0 0 6px 6px;
      background-color: #fff;

      ul {
        display: flex;
        justify-content: space-around;
      }

      li {
        float: left;
        width: 50px;
        height: 50px;
        padding: 1px;
        border: 1px solid #a6a6a6;
        border-radius: 3px;
        list-style-type: none;
      }

      img {
        max-width: 50px;
      }
    }

    .product__info {
      height: 450px;
      padding: 0.8em 0;
    }

    .title {
      h1 {
        margin-bottom: 0.1em;
        color: #4c4c4c;
        font-size: 1.5em;
        font-weight: 900;
      }

      span {
        font-size: 0.7em;
        color: #a6a6a6;
      }
    }

    .description {
      clear: left;
      margin: 2em 0;
      h4 {
        max-width: 250px;
      }
    }

    .buy--btn {
      padding: 1.5em 3.1em;
      border: none;
      border-radius: 7px;
      font-size: 0.8em;
      font-weight: 700;
      letter-spacing: 1.3px;
      color: #fff;
      background-color: #ff3f40;
      box-shadow: 2px 2px 25px -7px #4c4c4c;
      cursor: pointer;

      &:active {
        transform: scale(0.97);
      }
    }
  `;

  return (
    <CardWrappper>
      <Card key={props.idx}>
        <div className="photo">
          <div className="photo-container">
            <div className="photo-main">
              <img src={props.photo.url} />
            </div>
            <div className="photo-album">
              <ul>
                <li>
                  <img src={props.photo.thumbnailUrl} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="title">
            <h1>Photo ID: {props.photo.id}</h1>
          </div>
          <div className="description">
            <h4>Photo Title: {props.photo.title}</h4>
          </div>
          <button className="buy--btn" onClick={() => props.onAddPhoto(props)}>
            ADD TO WISHLIST
          </button>
        </div>
      </Card>
    </CardWrappper>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPhoto: props => {
      dispatch({
        type: PHOTOS.ADD_PHOTO,
        photo: {
          id: props.photo.id,
          title: props.photo.title,
          url: props.photo.url,
          thumbnailUrl: props.photo.thumbnailUrl
        }
      });
    }
  };
};

const PhotoIdContainer = connect(
  null,
  mapDispatchToProps
)(PhotoId);
export default PhotoIdContainer;
