import './style.css'
import avatarImg from '../../assets/avatar-5.jpg'
import { Row, Col, Button, Form } from 'react-bootstrap'
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
} from 'lucide-react'

export const SinglePost = ({postData}) => {
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
    `Congratulazioni ${postData.user.name}!`,
    `Ti auguro il meglio!`,
    `Ben fatto, ${postData.user.name}`,
  ];

  return (
    <Row>
      <Col>
        <div className="single-post bg-light shadow-sm p-3 rounded d-flex gap-0">
          <div className="d-flex flex-column gap-2">
            {/* USER  */}
            <div>
              <div className="d-flex gap-3 justify-content-between">
                <div className="flex-grow-0">
                  <img src={postData.user.image} alt="" width={60} className="rounded-5" />
                </div>
                <div className="d-flex flex-column flex-grow-1">
                  <span className="title">
                    {postData.user.name} {postData.user.surname} •{" "}
                    <span className="chain">{userData.chain}</span>
                  </span>
                  <span>--</span>
                  <span className="post-date">{postData.user.updatedAt}</span>
                </div>
                <div className="flex-grow-0 d-flex gap-3 align-items-start">
                  <Ellipsis />
                  <X />
                </div>
              </div>
            </div>
            {/* POST TEXT */}
            <div>
              <div className="d-flex flex-column gap-2 py-2">
                <div>
                  <span className="post-text">{postData.post.body}</span>
                </div>
                <div>
                  <span className="translation">Mostra traduzione</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>♥️ {postData.post.reactions.likes}</span>
                  <span>{postData.post.views} commenti</span>
                </div>
              </div>
            </div>
            <span className="divider"></span>
            {/* USER ACTION */}
            <div>
              <div className="d-flex gap-4 py-2">
                <div className="d-flex align-items-center gap-1 flex-grow-1">
                  <img
                    src={avatarImg}
                    alt=""
                    width={35}
                    className="rounded-5"
                  />
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
              </div>
            </div>
            {/* SUGGESTED ANSWER */}
            <div>
              <div className="d-flex gap-2">
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
              </div>
            </div>
            {/* CUSTOM INPUT */}
            <div>
              <div>
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
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
