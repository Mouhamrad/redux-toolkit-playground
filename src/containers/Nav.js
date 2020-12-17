//application menu
//used css file 3 because i used navbar bootstrap

import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  a {
    text-decoration: none;
  }
`;

const UlWarraper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-self: flex-end;

  list-style-type: none;
`;
// const Ul = styled.ul`
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
// `;

const Li = styled.li`
  float: left;
  margin: auto;
  width: 160px;
  padding: 30px;
  text-align: center;
`;

const LinkHover = styled.div`
  &:hover {
    background: #d16ba5;
    color: #fff;
    border-radius: 25px;
    -webkit-transition-property: color, background;
    -webkit-transition-duration: 0.5s, 0.5s;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  margin-left: -135px;
  padding-left: -10px;
  right: 16px;
  top: 78px;
  background-color: #f9f9f9;
  max-width: 192px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  ul {
    list-style-type: none;
  }
`;

const Dropbtn = styled.li`
  margin: auto;
  width: 160px;
  padding: 30px;
  text-align: center;

  position: relative;
  display: inline-block;
  &:hover ${DropdownContent} {
    display: block;
  }
`;

const Nav = (props) => {
  return (
    <NavBar>
      <Link to="/">
        <img
          style={{
            height: "60px",
            padding: "8px 0",
            width: "auto",
            marginLeft: "50px"
          }}
        />
      </Link>
      <UlWarraper>
        <Li>
          <Link to="/">
            <LinkHover>Home</LinkHover>
          </Link>
        </Li>
        <Dropbtn>
          <div>
            <span>{props.photo.length}</span> Wishlist
          </div>
          <DropdownContent>
            <ul>
              {props.photo.map((item) => {
                return (
                  <li style={{ cursor: "pointer" }}>
                    <div>
                      <div>
                        <span>{item.id}</span>
                        <br />
                        <img
                          src={item.thumbnailUrl}
                          alt=""
                          style={{ width: "70px" }}
                        />
                      </div>
                      <div>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
              <hr />
              <li>
                <Link to="/wishlist">View Wishlist</Link>
              </li>
            </ul>
          </DropdownContent>
        </Dropbtn>
      </UlWarraper>
    </NavBar>
  );
};
const mapStateToProps = (state) => {
  return {
    photo: state.photo.wishlist
  };
};
export default connect(mapStateToProps)(Nav);
