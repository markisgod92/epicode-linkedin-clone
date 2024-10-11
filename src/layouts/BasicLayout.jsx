import Navigation from '../components/navigation/Navigation'
import { CreateNewPost } from '../components/create-new-post/CreateNewPost'
import { PostModalButton } from '../components/create-post-modal/PostModalButton'
import { Footer } from '../components/footer/Footer'
import { LeftSideBarMain } from '../components/left-sidebar-main/LeftSideBarMain'
import { RightSideNews } from '../components/right-side-news/RightSideNews'
import { SinglePost } from '../components/single-post/SinglePost'
import { Container, Row, Col } from 'react-bootstrap'

export const BasicLayout = () => {
    return (
        <>
            <Navigation />
            <main>
                <Container fluid="md" className="py-5">
                    <Row>
                        <Col md={3} className="d-none d-md-block">
                            <div className="d-flex flex-column">
                                <div>
                                    <LeftSideBarMain />
                                </div>
                            </div>
                            <div className="my-3 p-5 bg-primary-subtle">
                                MENU
                            </div>
                        </Col>
                        <Col xs={12} md={9} xl={6}>
                            <div className="d-flex gap-2 flex-column">
                                <div className="d-block d-md-none my-3 p-5 bg-primary-subtle">
                                    MOBILE PROFILE HEADER
                                </div>
                                <div>
                                    <CreateNewPost />
                                    <PostModalButton />
                                </div>
                                <div>
                                    <SinglePost />
                                </div>
                                <div>
                                    <SinglePost />
                                </div>
                                <div>
                                    <SinglePost />
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} className="d-none d-xl-block">
                            <div>
                                <RightSideNews />
                            </div>{' '}
                            <div className="my-3 p-5 bg-primary-subtle">
                                UNLOCK PREMIUM
                            </div>
                            <div>
                                <Footer />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </>
    )
}
