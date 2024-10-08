import "./style.css";

const LeftSideBarMainBlock = () => {
  return (
    <div className="m-3 border rounded">
      <div
        id="imagesContainer"
        className="d-flex flex-column align-items-start"
      >
        <img id="banner" src="./src/assets/bannerExample.svg" />
        <img id="avatarPic" src=".\src\assets\profilePickExample.jpeg" />
      </div>
      <div className="p-3 pt-5">
        <h3>Giuseppe Raso</h3>
        <p>Hi, i am a full stack web developer.</p>
        <button className="p-1 border rounded w-100">
          <div
            id="newExperienceButton"
            className="d-flex justify-content-center align-items-center gap-2 px-2"
          >
            <span id="plusIcon">&#43;</span>New Experience
          </div>
        </button>
      </div>
    </div>
  );
};

export default LeftSideBarMainBlock;
