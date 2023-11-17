import React, { useState } from 'react';

// Reusable Form component
const Form = ({ onSubmit, fields }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form >
      {fields.map((field) => (
        <div key={field.name}>
          <label>
            {field.label}:
            <input
              type={field.type || 'text'}
              name={field.name}
              value={formData[field.name] || ''}
              onChange={handleChange}
            />
          </label>
          <br />
        </div>
      ))}
      <button onSubmit={handleSubmit} type="submit">Submit</button>
    </form>
  );
};
export default Form;
