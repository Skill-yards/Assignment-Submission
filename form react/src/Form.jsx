import React, { useEffect, useState } from "react";
import './Form.css'

function Form() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [date, setdate] = useState("");
  const [terms, setterms] = useState(false);
  const [city, setcity] = useState("");
  const [storedData, setstoredData] = useState(null);
  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setstoredData(JSON.parse(data));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 4) {
      seterror("Name must be at least 4 characters long");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      seterror("Please Enter a Valid Email");
      return;
    }
    if (!terms) {
      seterror("you must agree the terms and conditions");
      return;
    }
    const formData = { name, email, terms, city, date };
    localStorage.setItem("formData", JSON.stringify(formData));
    console.log(name, email, date, city);
    alert("Form has been submitted");
    setname("");
    setemail("");
    setterms(false);
    setdate("");
    seterror("");
    setcity("");
  };

  return (
    <div className="form-Wrap">
      <div className="contact-Form">
        <h1>Contact Form</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-Group">
            <label>Name</label>
            <input
              type={"text"}
              value={name}
              placeholder="Enter name"
              onChange={(e) => setname(e.target.value)}
              required
            ></input>
            <label>Email</label>
            <input
              type={"email"}
              value={email}
              placeholder="Enter email"
              onChange={(e) => setemail(e.target.value)}
              required
            ></input>
            <label>DOB</label>
            <input
              type={"date"}
              value={date}
              onChange={(e) => setdate(e.target.value)}
              required
            />
            <div className="checkbox">
              <label>Terms and Condition</label>
              <input
                type="checkbox"
                onChange={(e) => setterms(e.target.checked)}
                required
              ></input>
            </div>
            <label>City</label>
            <input
              type="text"
              value={city}
              placeholder="Enter city"
              onChange={(e) => setcity(e.target.value)}
            ></input>

            <button type="submit">submit</button>
          </div>
        </form>
        {storedData && (
          <div className="storedData">
            <h2>Stored Data</h2>
            <p>Name:{storedData.name} </p>
            <p>Email:{storedData.email} </p>
            <p>City:{storedData.city} </p>
            <p>DOB:{storedData.date} </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
