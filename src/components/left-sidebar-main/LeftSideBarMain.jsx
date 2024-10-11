import { Row, Col } from 'react-bootstrap'
import bannerImg from '../../assets/hero-img.webp'
import profileImg from '../../assets/avatar-5.jpg'
import './style.css'

export const LeftSideBarMain = () => {
    return (
        <Row>
            <Col>
                <div className="rounded bg-light overflow-hidden">
                    <div
                        id="imagesContainer"
                        className="d-flex flex-column align-items-start"
                    >
                        <img id="banner" src={bannerImg} />
                        <img id="avatarPic" src={profileImg} />
                    </div>
                    <div className="p-3 pt-5">
                        <h3>Giuseppe Raso</h3>
                        <p>Hi, i am a full stack web developer.</p>
                        <button className="p-1 border rounded-5 w-100">
                            <div
                                id="newExperienceButton"
                                className="d-flex justify-content-center align-items-center gap-2 px-2 rounded-5"
                            >
                                <span id="plusIcon">&#43;</span>New Experience
                            </div>
                        </button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}
