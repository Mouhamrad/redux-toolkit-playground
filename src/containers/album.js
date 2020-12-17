//show the details of each album

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  margin-left: 30px;
  padding: 20px;

  .product-info {
    float: left;
    height: 320px;
    width: 327px;
    border-radius: 10px 7px 10px 7px;
    background-color: #ffffff;
  }

  .product-text {
    height: 300px;
    width: 327px;
  }

  .product-text h1 {
    margin: 0 0 0 38px;
    padding-top: 52px;
    font-size: 34px;
    color: #474747;
  }

  .product-text h1 {
    font-family: "Bentham", serif;
  }
`;

const Album = props => {
  return (
    <div>
      <Link to={`/albums/${props.item.id}`}>
        <Card>
          <div className="product-info">
            <div className="product-text">
              <h1>{props.item.id}</h1>
              <h1>{props.item.title}</h1>
            </div>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default Album;
