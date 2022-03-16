import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          // save the movie data
          setMovie(doc.data());
        } else {
          // redirect to home page
        }
      });
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={movie.backgroundImg} />
      </Background>
      <Logo>
        <img src={movie.titleImg} />
      </Logo>
      <ContentMeta>
        <Controls>
          <PlayButton>
            <img src="/images/play-icon-black.png" alt="" />
            <span>PLAY</span>
          </PlayButton>
          <TrailerButton>
            <img src="images/play-icon-white.png" alt="" />
            <span>TRAILER</span>
          </TrailerButton>
          <AddButton>
            <span>+</span>
          </AddButton>
          <GroupWatchButton>
            <img src="/images/group-icon.png" />
          </GroupWatchButton>
        </Controls>
        <SubTitle>{movie.subTitle}</SubTitle>
        <Info>{movie.description}</Info>
      </ContentMeta>
    </Container>
  );
};

export default Details;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  padding-top: 15vh;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
      width: initial;
    }
  }
`;

const Logo = styled.div`
  overflow: hidden;
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-bottom: 20px;

  img {
    height: 100%;
    object-fit: contain;
    max-width: 500px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  outline-width: 0;
  border: none;
  font-size: 15px;
  padding: 0 24px;
  height: 56px;
  letter-spacing: 1.8px;
  background: rgb(249, 249, 249);
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-right: 16px;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Info = styled.div`
  line-height: 1.5;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
