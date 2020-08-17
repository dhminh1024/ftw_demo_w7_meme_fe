import React from "react";
import { Card, CardColumns } from "react-bootstrap";

const MemeList = ({ memes, showDetail }) => {
  return (
    <CardColumns>
      {memes?.length > 0 && (
        <ul className="list-unstyled">
          {memes.map((meme) => (
            <MemeCard meme={meme} showDetail={showDetail} key={meme.id} />
          ))}
        </ul>
      )}
    </CardColumns>
  );
};

const MemeCard = ({ meme, showDetail }) => {
  return (
    <Card
      border="primary"
      className="mouse-hover"
      onClick={() => showDetail(meme)}
    >
      <Card.Img
        variant="top"
        src={`${process.env.REACT_APP_BACKEND_API}/${
          meme.outputMemePath.split("public/")[1]
        }?${meme.updatedAt}`}
      />
    </Card>
  );
};

export default MemeList;
