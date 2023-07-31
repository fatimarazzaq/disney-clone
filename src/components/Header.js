import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { setLogin, setLogout } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [show, setShow] = useState(false);
  const userSelector = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = userSelector.name;
  // const email = userSelector.email;
  const photo = userSelector.photo;

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userData = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        dispatch(setLogin(userData));
        navigate("/");
      }
    });
  }, []);

  const loginClicked = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        const userData = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        dispatch(setLogin(userData));

        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
        console.log(`${errorMessage} with error code ${errorCode}`);
      });
  };

  const logoutClicked = () => {
    signOut(auth)
      .then(() => {
        dispatch(setLogout());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <Container>
        <NavLink to="/">
          <Logo src="/images/photos/logo.svg"></Logo>
        </NavLink>
        {username ? (
          <>
            <Nav>
              <NavLink to="/">
                <img src="/images/photos/home-icon.svg" alt="img"></img>
                <span>Home</span>
              </NavLink>
              <NavLink to="/#">
                <img src="/images/photos/search-icon.svg" alt="img"></img>
                <span>Search</span>
              </NavLink>
              <NavLink to="/#">
                <img src="/images/photos/watchlist-icon.svg" alt="img"></img>
                <span>watchlist</span>
              </NavLink>
              <NavLink to="/#">
                <img src="/images/photos/original-icon.svg" alt="img"></img>

                <span>Originals</span>
              </NavLink>
              <NavLink to="/#">
                <img src="/images/photos/movie-icon.svg" alt="img"></img>
                <span>Movies</span>
              </NavLink>
              <NavLink to="/#">
                <img src="/images/photos/series-icon.svg" alt="img"></img>
                <span>Series</span>
              </NavLink>
            </Nav>
            <PhotoIcon src={photo} onClick={logoutClicked}></PhotoIcon>
            <SmallNav>
              <HamBurger onClick={() => setShow(true)}></HamBurger>
            </SmallNav>
          </>
        ) : (
          <>
            <LoginParent>
              <Login onClick={loginClicked}>Login</Login>
            </LoginParent>
          </>
        )}
      </Container>
      <SmallMenuShow showBurger={show}>
        <CloseDiv>
          <Close onClick={() => setShow(false)}></Close>
        </CloseDiv>
        <MyPhoto>
          <SmallPhotoIcon src={photo} onClick={logoutClicked}></SmallPhotoIcon>
        </MyPhoto>
        <NavSmall>
          <NavLink to="/">
            <img src="/images/photos/home-icon.svg" alt="img"></img>
            <span>Home</span>
          </NavLink>
          <NavLink to="/#">
            <img src="/images/photos/search-icon.svg" alt="img"></img>
            <span>Search</span>
          </NavLink>
          <NavLink to="/#">
            <img src="/images/photos/watchlist-icon.svg" alt="img"></img>
            <span>watchlist</span>
          </NavLink>
          <NavLink to="/#">
            <img src="/images/photos/original-icon.svg" alt="img"></img>

            <span>Originals</span>
          </NavLink>
          <NavLink to="/#">
            <img src="/images/photos/movie-icon.svg" alt="img"></img>
            <span>Movies</span>
          </NavLink>
          <NavLink to="/#">
            <img src="/images/photos/series-icon.svg" alt="img"></img>
            <span>Series</span>
          </NavLink>
        </NavSmall>
      </SmallMenuShow>
    </>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  border-bottom: 2px solid #05070c;
  overflow-x: hidden;
  z-index: 100;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const Nav = styled.div`
  flex: 1;
  display: flex;
  margin-left: 20px;
  align-items: center;
  margin-left: 50px;
  overflow-x: hidden;
  @media (max-width: 786px) {
    display: none;
  }
  & a {
    text-decoration: none;
    margin: 0px 8px;
    display: flex;
    align-items: center;
    img {
      height: 20px;
    }
    span {
      text-transform: uppercase;
      color: white;
      font-size: 14px;
      letter-spacing: 2px;
      position: relative;
      margin-left: 5px;
      &::before {
        content: "";
        height: 2px;
        width: auto;
        background-color: white;
        left: 0px;
        right: 0px;
        bottom: 0px;
        position: absolute;
        opacity: 0;
        visibility: hidden;
        transform-origin: left center;
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: scaleX(0);
      }
      &:hover::before {
        opacity: 1;
        visibility: visible;
        transform: scaleX(100%);
      }
    }
  }
`;

const PhotoIcon = styled.img`
  height: 45px;
  border-radius: 100px;
  cursor: pointer;
  @media (max-width: 786px) {
    display: none;
  }
`;

const SmallPhotoIcon = styled.img`
  height: 45px;
  border-radius: 100px;
  cursor: pointer;
`;

const MyPhoto = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginParent = styled.div``;
const Login = styled.div`
  border: 1px solid rgba(249, 249, 249, 0.5);
  color: rgba(249, 249, 249, 0.5);
  transition: all 360ms;
  padding: 7px 14px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(249, 249, 249, 0.8);
    color: rgba(249, 249, 249, 0.8);
  }
`;

const SmallNav = styled.div`
  margin-left: 20px;
  cursor: pointer;
  display: none;
  @media (max-width: 786px) {
    display: block;
  }
`;

const HamBurger = styled(MenuIcon)`
  transform: scale(1.2);
`;

const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Close = styled(CloseIcon)`
  border: 1px solid;
  transform: scale(1.3);
  opacity: 0.5;
  cursor: pointer;
  border-radius: 20px;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
`;

const NavSmall = styled.div`
  padding-top: 20px;
`;

const SmallMenuShow = styled.div`
  padding: 30px ;
  text-align:left;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background-color:#090B13;
  z-index: 1000;
 
  margin-left: 20px;
  align-items: center;
  margin-left: 50px;
  overflow-x: hidden;
  transform:${(props) =>
    props.showBurger ? "translateX(0)" : "translateX(100%)"};
    transition: all 0.5s;
 
  & a {
    padding:15px 0px;
    text-decoration: none;
    margin: 0px 8px;
    display: flex;
    align-items: center;
    img {
      height: 20px;
    }
    span {
      text-transform: uppercase;
      color: white;
      font-size: 14px;
      letter-spacing: 2px;
      position: relative;
      margin-left: 5px;
      &::before {
        content: "";
        height: 2px;
        width: auto;
        background-color: white;
        left: 0px;
        right: 0px;
        bottom: 0px;
        position: absolute;
        opacity: 0;
        visibility: hidden;
        transform-origin: left center;
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: scaleX(0);
      }
      &:hover::before {
        opacity: 1;
        visibility: visible;
        transform: scaleX(100%);
      }
    }
`;
