import { Row, Col } from 'react-bootstrap'
import { useContext } from 'react'
import { MyProfileContext } from '../../context/MyProfileContext'
import './style.css'

export const LeftSideBarMain = () => {
    const { myProfile } = useContext(MyProfileContext)
    return (
        <>
            {myProfile && (
                <Row>
                    <Col>
                        <div className="rounded bg-light overflow-hidden">
                            <div
                                id="imagesContainer"
                                className="d-flex flex-column align-items-start"
                            >
                                <img id="banner" src={myProfile.image} />
                                <img id="avatarPic" src={myProfile.image} />
                            </div>
                            <div className="p-3 pt-5">
                                <h3>
                                    {myProfile.name} {myProfile.surname}
                                </h3>
                                <p>{myProfile.title}</p>
                                <button className="p-1 border rounded-5 w-100">
                                    <div
                                        id="newExperienceButton"
                                        className="d-flex justify-content-center align-items-center gap-2 px-2 rounded-5"
                                    >
                                        <span id="plusIcon">&#43;</span>
                                        <span>New Experience</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}
        </>
    )
}
