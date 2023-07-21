import React, { useState } from "react";

const Formpractice = () => {
  const [formData, setFormData] = [
    {
      email: "",
      password: "",
      confirmPassword: "",
      isJoin: false,
    },
  ];

  //handle change
  const handleChange = (event) => {
    console.log(event.target.value);
    const {
      name,
      email,
      password,
      confirmPassword,

      isJoin,
      type,
      checked,
      value,
    } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };
  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form id="form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="form-input"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-input"
          onChange={handleChange}
        />
        <input
          type="email"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="form-input"
          onChange={handleChange}
        />
        <div className="form-marketing">
          <input type="checkbox" />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Formpractice;
