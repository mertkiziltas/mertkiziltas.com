/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/InputModal.scss";

const InputModal = ({ show, onClose }) => {
const [inputValue, setInputValue] = useState("");
const navigate = useNavigate();


  if (!show) {
    return null;
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/Blog/Search/${inputValue.toLowerCase()}`);
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Ara..."
            value={inputValue}
            onChange={handleInputChange}
            className="modal-input"
          />
        </form>
      </div>
    </div>
  );
};

export default InputModal;
