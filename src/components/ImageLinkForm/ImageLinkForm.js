import React from "react";
import "./ImageLinkForm.scss";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="image-link-form">
      <p>
        {"This Magic Brain will detect faces in your pictures, Give it a try."}
      </p>
      <div className="image-link-form-components">
        <input type="text" onChange={onInputChange} />
        <button onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
