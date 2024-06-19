import React, { useMemo } from "react";
import "./App.css";

const colors = ["#16a13b", "#09d8e3", "#7115d4", "#d4ce15"];

const NoteColorPicker = ({ color, updateNote }) => {
  const handleColorChange = (e) => {
    updateNote(color.id, color.text, e.target.value);
  };

  const colorOptions = useMemo(() => {
    return colors.map((c) => (
      <button
        key={c}
        style={{ backgroundColor: c }}
        value={c}
        onClick={handleColorChange}
      />
    ));
  }, []);

  return <div className="colorpicker">Pick a color: {colorOptions}</div>;
};

export default NoteColorPicker;
