import { Modal } from 'react-bootstrap'
import avatarImg from '../../assets/avatar-5.jpg'
import { useState } from 'react'
import {
    Smile,
    Image,
    Calendar,
    Cloud,
    Plus,
    Clock,
    ChevronDown,
    X,
} from 'lucide-react'
import './style.css'

export const CreatePostModal = ({
    showModal,
    setShowModal,
    toggleShowModal,
}) => {
    const [post, setPost] = useState('')
    const [postModalLoading, setPostModalLoading] = useState('')

    const onChangeInput = (e) => {
        setPost(e.target.value)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <Modal
            show={showModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="d-flex justify-content-between">
                <button className="profilePicBtn d-flex align-items-center justify-content-center rounded-4 gap-2 p-3 m-0">
                    <img
                        src={avatarImg}
                        alt="profile img"
                        className="h-100 object-fit-cover"
                    />
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <h5>Antonietta Andreozzi</h5>
                        <span>Pubblica: Chiunque</span>
                    </div>
                    <ChevronDown
                        className="modalArrowDownIcon"
                        color="#60605f"
                        size={20}
                    />
                </button>

                <a
                    href="#"
                    onClick={closeModal}
                    className="post-modal-exit-button text-muted"
                >
                    <X className="" color="#60605f" size={30} />
                </a>
            </Modal.Header>

            <Modal.Body>
                <textarea
                    className="postModalBody w-100 p-2"
                    name="post"
                    id=""
                    value={post}
                    placeholder="Di cosa vorresti parlare?"
                >
                    Scrivi qui il tuo post
                </textarea>
                <div className="d-flex flex-column gap-3">
                    <div className="text-start justify-content-center p-3">
                        <a href="#" className="modal-footer-icons text-muted">
                            <Smile color="#60605f" size={25} />
                        </a>
                    </div>
                    <div className="d-flex align-items-center justify-content-start gap-5 p-3">
                        <a href="#" className="modal-footer-icons text-muted">
                            <Image color="#60605f" size={25} />
                        </a>

                        <a href="#" className="modal-footer-icons text-muted">
                            <Calendar color="#60605f" size={25} />
                        </a>
                        <a href="#" className="modal-footer-icons text-muted">
                            <Cloud color="#60605f" size={25} />
                        </a>
                        <a href="#" className="modal-footer-icons text-muted">
                            <Plus color="#60605f" size={25} />
                        </a>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <a href="#" className="modal-footer-icons text-muted">
                    <Clock color="#60605f" size={25} />
                </a>
                <button
                    className="modal-publish-btn rounded-pill px-3 py-1"
                    onClick={closeModal}
                >
                    Pubblica
                </button>
            </Modal.Footer>
        </Modal>
    )
}
