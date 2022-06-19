import "./styles.css";
import { TiDelete } from "react-icons/ti";
import React, { useState } from "react";
const App = () => {
  const [text, setText] = useState("");

  const [tags, setTags] = useState([]);

  const [textDirty, setTextDirty] = useState(true);

  const [textError, setTextError] = useState(
    "Поле ввода не должно быть пустым"
  );
  const handleSetText = (e) => {
    setText(e.target.value);
    if (e.target.value) {
      setTextDirty(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    setText("");
  };
  const blurHandler = (e) => {
    if (e.target.name === text) {
      setTextDirty(false);
    }
  };
  const addTags = (e) => {
    e.preventDefault();
    if (text) {
      setTags([...tags, text]);
      setText("");
    }
  };

  const removeTags = (id) => {
    const filtered = tags.filter((tags, index) => id !== index);
    setTags(filtered);
    setTextDirty(false);
  };

  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            onBlur={blurHandler}
            type="text"
            value={text}
            onChange={handleSetText}
            className={`input ${!textDirty ? "error" : ""}`}
          />
          <button onClick={addTags} type="submit" disabled={!text}>
            Отправить
          </button>

          <ul className="newTags">
            {tags.map((tag, index) => {
              return (
                <li key={index}className="newLi">
                  <span className="newSpan">{tag}</span>
                  <TiDelete
                    onClick={() => removeTags(index)}
                    className="deleteBtn"
                  />
                </li>
              );
            })}
          </ul>
        </form>
      </div>
      <div>{!textDirty && <div className="text__error">{textError}</div>}</div>
    </>
  );
};
export default App;
