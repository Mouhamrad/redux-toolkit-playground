//show the details of each photo

import React from "react";
import styled from "styled-components";

const styleDisplay = {
  display: "flex",
  flexWrap: "wrap",
  flexGrow: "3"
};

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

  .product-info img {
    margin: 0 0 0 58px;
    padding-top: 50px;
    height: 200px;
    width: 200px;
  }
`;

const Photo = props => {
  return (
    <div style={styleDisplay}>
      <Card>
        <div className="product-info">
          <div key={props.idx}>
            <img src={props.item.thumbnailUrl} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Photo;
