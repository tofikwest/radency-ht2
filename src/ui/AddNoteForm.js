import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { noteAdded } from "../redux/store";
import { nanoid } from "@reduxjs/toolkit";
import { parseDates, tmstmpToString } from "../utils/utils.js";

export const AddNoteForm = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const dipatch = useDispatch();

  const onNameChange = (e) => setName(e.target.value);
  const onCategoryChange = (e) => setCategory(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSubmitClicked = () => {
    if (name && category && content) {
      dipatch(
        noteAdded({
          id: nanoid(),
          name,
          category,
          content,
          dates: parseDates(content),
          createdAt: tmstmpToString(Date.now()),
        })
      );
      props.button.handleClick();
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
