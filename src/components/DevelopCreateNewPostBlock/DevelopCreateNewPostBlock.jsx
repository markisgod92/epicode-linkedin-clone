import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Image, Calendar, FileText } from "lucide-react";
import CreatePostModal from "../create-post-modal/CreatePostModal";

const PostBox = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => setShowModal(!showModal);

  return (
    <>
      <Row className="my-4">
        <Col xs={12} md={6} className="m-auto">
          <div className="post-box p-3 mb-3 shadow-sm rounded bg-light text-dark">
            <div className="d-flex align-items-center mb-2">
              <img
                src="https://via.placeholder.com/40"
                alt="profile"
                className="rounded-circle me-2"
              />
              <input
                type="text"
                className="form-control bg-light text-dark"
                onClick={toggleShowModal}
                placeholder="Crea un post"
              />
            </div>

            <div className="d-flex justify-content-around mt-3">
              <a href="#" className="text-secondary d-flex align-items-center">
                <Image className="me-2" />
                Contenuti multimediali
              </a>
              <a href="#" className="text-secondary d-flex align-items-center">
                <Calendar className="me-2" />
                Evento
              </a>
              <a href="#" className="text-secondary d-flex align-items-center">
                <FileText className="me-2" />
                Scrivi un articolo
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <CreatePostModal
        showModal={showModal}
        toggleShowModal={toggleShowModal}
      />
    </>
  );
};

export default PostBox;
