import React from "react";
import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <Container className="fill d-flex justify-content-center align-items-center">
      <p className="text-center">
        Please select a meme in the gallery <br />{" "}
        <label className="import-image-label" htmlFor="local-meme">
          <input
            type="file"
            className="import-image-label-input"
            accept="image/png, image/jpeg"
            id="local-meme"
          />
          or <span className="import-image-label-text">upload an image</span>.
        </label>
      </p>
    </Container>
  );
};
export default HomePage;
