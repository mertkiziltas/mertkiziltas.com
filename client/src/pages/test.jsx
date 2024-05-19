import React, { useState, useRef, useEffect } from 'react';

const TestPage = () => {
  const [blogElements, setBlogElements] = useState([]);
  const [inputValues, setInputValues] = useState({});
  const inputRefs = useRef({});

  const handleAddElement = () => {
    const newElementId = blogElements.length;
    setBlogElements(prevElements => [...prevElements, { id: newElementId }]);
  };

  const handleRemoveElement = id => {
    setBlogElements(prevElements => prevElements.filter(element => element.id !== id));
    setInputValues(prevValues => {
      const updatedValues = { ...prevValues };
      delete updatedValues[id];
      return updatedValues;
    });
  };

  const handleInputChange = (id, value) => {
    setInputValues(prevValues => ({ ...prevValues, [id]: value }));
  };

  const handleSubmit = () => {
    const blogData = Object.values(inputValues);
    const jsonData = JSON.stringify(blogData);
    console.log(jsonData);
  };

  const BlogElement = ({ id, onRemove }) => {
    const inputValue = inputValues[id] || '';

    useEffect(() => {
      if (inputRefs.current[id]) {
        inputRefs.current[id].focus();
      }
    }, [id]);

    return (
      <div>
        <input
          type="text"
          placeholder="Blog içeriği"
          value={inputValue}
          onChange={e => handleInputChange(id, e.target.value)}
          ref={el => (inputRefs.current[id] = el)}
        />
        <button onClick={() => onRemove(id)}>Kaldır</button>
      </div>
    );
  };

  return (
    <div>
      <h1>Admin Paneli</h1>
      <button onClick={handleAddElement}>Ekle</button>
      <button onClick={handleSubmit}>Gönder</button>
      {blogElements.map(element => (
        <div key={element.id}>
          <BlogElement id={element.id} onRemove={handleRemoveElement} />
        </div>
      ))}
    </div>
  );
};

export default TestPage;
