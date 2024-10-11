import { Button } from 'react-bootstrap'
import { CreatePostModal } from './CreatePostModal'
import { useState } from 'react'

export const PostModalButton = () => {
    const [showModal, setShowModal] = useState(false)

    const toggleShowModal = () => setShowModal(!showModal)
    return (
        <>
            <Button onClick={toggleShowModal}>Apri il modale</Button>
            <CreatePostModal
                showModal={showModal}
                toggleShowModal={toggleShowModal}
                setShowModal={setShowModal}
            />
        </>
    )
}
