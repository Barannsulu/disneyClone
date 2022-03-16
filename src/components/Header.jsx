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
      <Created>Created by @barannsulu</Created>
      <UserImg
        onClick={signOut}
        src="https://pbs.twimg.com/profile_images/1406768364693987330/hpGf9Ove_400x400.jpg"
      />
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

const Created = styled.p`
  margin-right: 10px;
  font-size: 12px;
`;

const UserImg = styled.img`
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
