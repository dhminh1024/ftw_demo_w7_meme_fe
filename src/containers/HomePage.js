import React, { useRef } from "react";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { memeActions } from "../redux/actions";

const HomePage = () => {
  const inputFile = useRef(null);
  const dispatch = useDispatch();
  const selectedMeme = useSelector((state) => state.meme.selectedMeme);
  const loading = useSelector((state) => state.meme.loading);

  const handleImportImage = async (fileList) => {
    const files = inputFile.current.files;
    const meme = {
      uploadedImage: files[0],
      localImageUrl: window.URL.createObjectURL(files[0]),
    };
    dispatch(memeActions.setSelectedMeme(meme));
  };

  const handleSubmitImage = () => {
    dispatch(memeActions.createMemeRequest(selectedMeme.uploadedImage));
  };

  const handleCancel = (params) => {
    dispatch(memeActions.setSelectedMeme(null));
  };

  return (
    <Container className="fill d-flex justify-content-center align-items-center">
      {selectedMeme && (
        <div
          className="content-overley"
          style={{ backgroundImage: `url(${selectedMeme.localImageUrl})` }}
        />
      )}
      {selectedMeme ? (
        <div className="main-meme">
          <img src={selectedMeme.localImageUrl} alt="Selected Meme" />
          {selectedMeme.id ? (
            <></>
          ) : (
            <ButtonGroup className="d-flex m-3">
              {loading ? (
                <Button
                  className="mr-3"
                  variant="primary"
                  type="button"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Submitting...
                </Button>
              ) : (
                <Button
                  className="mr-3"
                  onClick={handleSubmitImage}
                  variant="primary"
                >
                  Take this image
                </Button>
              )}
              <Button variant="light" onClick={handleCancel} disabled={loading}>
                Cancel
              </Button>
            </ButtonGroup>
          )}
        </div>
      ) : (
        <p className="text-center">
          Please select a meme in the gallery <br />{" "}
          <label className="import-image-label" htmlFor="local-meme">
            <input
              type="file"
              ref={inputFile}
              className="import-image-label-input"
              onChange={() => handleImportImage()}
              accept="image/png, image/jpeg"
              id="local-meme"
            />
            or <span className="import-image-label-text">upload an image</span>.
          </label>
        </p>
      )}
    </Container>
  );
};
export default HomePage;
