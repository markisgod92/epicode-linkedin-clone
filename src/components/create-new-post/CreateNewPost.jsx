import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { Image, Calendar, FileText } from "lucide-react";
import avatarImg from "../../assets/avatar-5.jpg";
import { useState } from "react";
import { CreatePostModal } from "../create-post-modal/CreatePostModal";
import { MyProfileContext } from "../../context/MyProfileContext";

export const CreateNewPost = () => {
  const [showModal, setShowModal] = useState(false);
  const { myProfile } = useContext(MyProfileContext)

  const toggleShowModal = () => setShowModal(!showModal);
  return (
    <>
      {myProfile && (
        <Row>
          <CreatePostModal
            showModal={showModal}
            toggleShowModal={toggleShowModal}
            setShowModal={setShowModal}
          />
          <Col>
            <div className="post-box p-3 mb-3 rounded shadow-sm bg-light text-dark">
              <div
                className="d-flex align-items-center mb-2"
                onClick={toggleShowModal}
              >
                <img
                  src={myProfile.image}
                  width={30}
                  alt="profile"
                  className="rounded-circle me-2"
                />
                <input
                  type="text"
                  className="form-control bg-light text-dark"
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
      )}
    </>

  );
};
