import { Button } from "react-bootstrap";
import CreatePostModal from "./CreatePostModal";
import { useContext, useState } from "react";
import { MyProfileContext } from "../../context/MyProfileContext";

const PostModalButton = () => {
    const [showModal, setShowModal] = useState(false);
  
 const toggleShowModal = () => setShowModal(!showModal)

 const {myProfile} = useContext(MyProfileContext);
 console.log(myProfile);

return (
    <>
    
<Button
onClick={toggleShowModal}>
  Apri il modale
</Button>
<CreatePostModal
showModal={showModal}
toggleShowModal = {toggleShowModal}
setShowModal={setShowModal}/>
    </>
)
    
}
export default PostModalButton