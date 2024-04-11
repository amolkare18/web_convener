// Form.js
import React, { useState } from 'react';
import './form.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const[gender,setGender]=useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, age,gender,email });
    setName('');
    setAge('');
    setGender('');
  setEmail('')
  };

  return (
    <div class="reg">
    <form class="f" onSubmit={handleSubmit}>
      <input
      class="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
      class="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
      class="gender"
        type="gender"
        placeholder="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <input
      class="email"
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Form;
