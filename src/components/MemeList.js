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
        src="https://www.fosi.org/media/images/22601782810_cbe3ede5f5_o.focus-none.original.jpg"
      />
    </Card>
  );
};

export default MemeList;
