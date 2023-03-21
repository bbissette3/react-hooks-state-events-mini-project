import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [text, setText] = useState("");
  const [category, setcategory] = useState("Code");

  const categoryOption = categories.map((category) => (
    <option key={category}>{category}</option>
  ));

  const handleTaskDetails = (e) => {
    setText(e.target.value)
  };

  const handleTaskCategory = (e) => {
    setcategory(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setText("")
    setcategory("Code")
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleTaskDetails} />
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleTaskCategory}>
          {categoryOption}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
