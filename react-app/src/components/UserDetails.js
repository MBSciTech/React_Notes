import React, { useState } from 'react';

const UserDetails = () => {
  const [fdata, setData] = useState({});

  function chg(e) {
    setData({ ...fdata, [e.target.name]: e.target.value });
  }

  function submit(e) {
    e.preventDefault();

    if (
      !fdata.uname ||
      !fdata.age ||
      !fdata.city ||
      !fdata.pwd ||
      !fdata.cpwd ||
      !fdata.gender
    ) {
      alert('Fill All Details...⚠ ⚠');
    } else if (fdata.pwd.length < 8) {
      alert('Password length must be >= 8...⚠ ⚠');
    } else if (fdata.pwd !== fdata.cpwd) {
      alert('Password and Confirm Password must match...⚠ ⚠');
    } else {
      alert(`Username: ${fdata.uname}\nAge: ${fdata.age}\nCity: ${fdata.city}`);
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif',justifyContent:'center',alignItems:'center',display:'grid',height:'50vh',background:'#edd758'}}>
      <form onSubmit={submit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username: </label>
          <input type='text' name='uname' onChange={chg} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Age: </label>
          <input type='number' name='age' onChange={chg} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>City: </label>
          <select name='city' onChange={chg} required>
            <option value="">---select---</option>
            <option>Ahmedabad</option>
            <option>Vadodra</option>
            <option>Rajkot</option>
            <option>Surat</option>
          </select>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password: </label>
          <input type='password' name='pwd' onChange={chg} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Confirm Password: </label>
          <input type='password' name='cpwd' onChange={chg} required />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Gender: </label>
          <input type='radio' name='gender' value='Male' onChange={chg} required /> Male
          <input type='radio' name='gender' value='Female' onChange={chg} required /> Female
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default UserDetails;
