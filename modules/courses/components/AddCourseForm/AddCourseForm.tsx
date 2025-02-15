'use client'

import { useState } from "react";

export type AddCourseFormProps = {
  onAddCourse: (playlistId: string) => void;
  error: boolean;
};

const AddCourseForm: React.FC<AddCourseFormProps> = ({ onAddCourse, error }) => {

  const [playlistId, setPlaylistId] = useState('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddCourse(playlistId)
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a new course</h2>
      <label>
        youtube playlist id:
        <input type="text" value={playlistId} onChange={(e) => setPlaylistId(e.target.value)} />
      </label>
      <button type="submit">Add course</button>
      {error && <p>Error adding course</p>}
    </form>
  );
};

export default AddCourseForm;
