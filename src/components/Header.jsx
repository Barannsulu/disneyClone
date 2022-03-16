import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setLogin,
  setLogout,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setLogin(user);
        navigate.push("/home");
      }
    });
  }, [userName]);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      console.log(result);
      let user = result.user;
      dispatch(
        setLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      navigate("/home");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setLogout());
      navigate("/");
    });
  };

  return (
    <Nav>
      <Link to="/home">
        <Logo src="/images/logo.svg" />
      </Link>
      <NavMenu>
        <Link to="/home">
          <img src="/images/home-icon.svg" />
          <span>HOME</span>
        </Link>

        <a>
          <img src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>

        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>

        <a>
          <img src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>

        <a>
          <img src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background-color: #090b13;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      width: 20px;
    }

    span {
      letter-spacing: 1.4px;
      font-size: 13px;
      margin-left: 5px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background-color: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        opacity: 0;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(.25 , .46, .45 , .94) 0s;
      }
    }

    &:hover {
        span:after{
            transform: scaleX(1);
            opacity: 1;
        }
  }

   @media (max-width: 900px) {
    display: none;
  } 
`;

const UserImg = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

const LoginContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const Login = styled.div`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 5px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
