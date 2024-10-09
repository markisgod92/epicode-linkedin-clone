import "./SinglePost.css";
import avatarImg from "../../assets/avatar-5.jpg";
import postImg from "../../assets/avatar-2.jpg";
import moreIcon from "../../assets/ellipsis-horizontal.svg";
import closeIcon from "../../assets/close.svg";
import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  Form,
} from "react-bootstrap";
import {
  ChevronDown,
  Ellipsis,
  Image,
  MessageSquareText,
  Repeat,
  Send,
  Smile,
  ThumbsUp,
  X,
} from "lucide-react";

export const SinglePost = ({}) => {
  const userData = {
    postImg: "../../assets/avatar-2.jpg",
    name: "Francesca",
    surname: "Mei",
    chain: "1°",
    date: "27/10/2024",
    postText:
      "I'm so thrilled to announce and share my new role as Office Manager presso benerail! Thanks for warm welcoming!",
    postLikes: 34,
    postComments: 8,
  };

  const suggestedAnswers = [
    `Congratulazioni ${userData.name}!`,
    `Ti auguro il meglio!`,
    `Ben fatto, ${userData.name}`,
  ];

  return (
    <Container
      fluid
      className="post-container d-flex justify-content-center align-items-center"
    >
      <Row className="single-post bg-light px-1 py-3 rounded-4 d-flex gap-0">
        <Col className="d-flex flex-column gap-2">
          {/* USER  */}
          <Row>
            <Col className="d-flex gap-3 justify-content-between">
              <div className="flex-grow-0">
                <img src={postImg} alt="" width={60} className="rounded-5" />
              </div>
              <div className="d-flex flex-column flex-grow-1">
                <span className="title">
                  {userData.name} {userData.surname} •{" "}
                  <span className="chain">{userData.chain}</span>
                </span>
                <span>--</span>
                <span className="post-date">{userData.date}</span>
              </div>
              <div className="flex-grow-0 d-flex gap-3 align-items-start">
                <Ellipsis />
                <X />
              </div>
            </Col>
          </Row>
          {/* POST TEXT */}
          <Row>
            <Col className="d-flex flex-column gap-2 py-2">
              <div>
                <span className="post-text">{userData.postText}</span>
              </div>
              <div>
                <span className="translation">Mostra traduzione</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>♥️ {userData.postLikes}</span>
                <span>{userData.postComments} commenti</span>
              </div>
            </Col>
          </Row>
          <span className="divider"></span>
          {/* USER ACTION */}
          <Row>
            <Col className="d-flex gap-4 py-2">
              <div className="d-flex align-items-center gap-1 flex-grow-1">
                <img src={avatarImg} alt="" width={35} className="rounded-5" />
                <ChevronDown size={15} />
              </div>
              <div className="d-flex gap-3 user-action">
                <div className="d-flex align-items-center gap-2">
                  <ThumbsUp />
                  Consiglia
                </div>
                <div className="d-flex align-items-center gap-2 user-action">
                  <MessageSquareText />
                  Commenta
                </div>
                <div className="d-flex align-items-center gap-2 user-action">
                  <Repeat />
                  Diffondi
                </div>
                <div className="d-flex align-items-center gap-2 user-action">
                  <Send />
                  Invia
                </div>
              </div>
            </Col>
          </Row>
          {/* SUGGESTED ANSWER */}
          <Row>
            <Col className="d-flex gap-2">
              {suggestedAnswers.map((answer, id) => (
                <Button
                  key={`answer+${id}`}
                  className="rounded-5"
                  size="sm"
                  variant="outline-secondary"
                >
                  <span>{answer}</span>
                </Button>
              ))}
            </Col>
          </Row>
          {/* CUSTOM INPUT */}
          <Row>
            <Col>
              <Form className="d-flex position-relative">
                <Form.Control
                  size="sm p-2 px-3"
                  className="rounded-5"
                  type="text"
                  placeholder="Aggiungi un commento..."
                />
                <div className="input-icons d-flex align-self-center gap-2">
                  <Smile />
                  <Image />
                </div>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
