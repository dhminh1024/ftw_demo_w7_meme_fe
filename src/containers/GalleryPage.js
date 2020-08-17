import React from "react";
import { Container, Row } from "react-bootstrap";
import PaginationMeme from "../components/PaginationMeme";
import MemeList from "../components/MemeList";

const GalleryPage = () => {
  const memes = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
  return (
    <Container className="p-2">
      <Row className="fill d-flex justify-content-center align-items-center">
        <PaginationMeme />
        <MemeList memes={memes} />
      </Row>
    </Container>
  );
};

export default GalleryPage;
