import "./SinglePost.css";
import avatarImg from "../../assets/avatar-2.jpg";
import moreIcon from "../../assets/ellipsis-horizontal.svg";
import closeIcon from "../../assets/close.svg";
import { Container, Row, Col } from "react-bootstrap";

const userData = {
  avatar: "../../assets/avatar-2.jpg",
  name: "Francesca",
  surname: "Mei",
  chain: "1°",
  date: "27/10/2024",
  postText:
    "I'm so thrilled to announce and share my new role as Office Manager presso benerail! Thanks for warm welcoming!",
  postLikes: 34,
  postComments: 8,
};

// avatar,
// name,
// surname,
// chain,
// date,
// postText,
// postLikes,
// postComments,

export const SinglePost = ({}) => {
  return (
    <Container
      fluid
      className="post-container d-flex justify-content-center align-items-center"
    >
      <Row className="single-post bg-light px-0 py-3 rounded-4 d-flex gap-0">
        <Col>
          <Container className="d-flex flex-column gap-2">
            <Row>
              {/* USER  */}
              <Col className="flex-grow-0">
                <img src={avatarImg} alt="" width={60} className="rounded-5" />
              </Col>
              <Col className="d-flex flex-column lex-grow-1">
                <span className="title">
                  {userData.name} {userData.surname} •{" "}
                  <span className="chain">{userData.chain}</span>
                </span>
                <span>--</span>
                <span className="post-date">{userData.date}</span>
              </Col>
              <Col className="flex-grow-0 d-flex gap-1 align-items-start">
                <Camera />
                <img src={moreIcon} alt="" width={25} />
                <img src={closeIcon} alt="" width={25} />
              </Col>
            </Row>
            {/* POST TEXT */}
            <Row className="py-2">
              <Col>
                <span>{userData.postText}</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span>Mostra traduzione</span>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-between">
                <span>{userData.postLikes}</span>
                <span>{userData.postComments} commenti</span>
              </Col>
            </Row>
            <span className="divider"></span>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
