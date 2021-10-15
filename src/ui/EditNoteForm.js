import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { noteEdited } from "../redux/store";
import { parseDates } from "../utils/utils.js";

export const EditNoteForm = (props) => {
  const note = props.note;

  const [name, setName] = useState(note.name);
  const [category, setCategory] = useState(note.category);
  const [content, setContent] = useState(note.content);

  const dipatch = useDispatch();

  const onNameChange = (e) => setName(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSubmitClicked = (e) => {
    if (name && category && content) {
      dipatch(
        noteEdited({
          id: note.id,
          name,
          category,
          content,
          dates: parseDates(content),
          createdAt: note.createdAt,
        })
      );
      props.onEditFinish(e);
    }
  };

  return (
    <div className="row item">
      <div className="col-3">
        <label htmlFor="name">
          Name:
          <input
            type="text"
            name="name"
            id="form-name"
            value={name}
            onChange={onNameChange}
          />
        </label>
      </div>
      <div className="col-6">
        <label htmlFor="content">Content:</label>
        <textarea
          name="content"
          id="form-content"
          cols="30"
          rows="10"
          onChange={onContentChange}
          defaultValue={content}
        ></textarea>
      </div>
      <div className="col-2">
        <select
          name="category"
          id="form-category"
          value={category}
          onChange={onCategoryChange}
        >
          <option value=""></option>
          <option value="random">Random Thought</option>
          <option value="idea">Idea</option>
          <option value="task">Task</option>
        </select>
      </div>
      <div className="col-1">
        <input type="button" id="form-submit" onClick={onSubmitClicked} />
      </div>
    </div>
  );
};
