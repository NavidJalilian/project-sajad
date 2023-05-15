import styles from "./Form.style";
import { FormProps } from "./Form.type";

import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Box } from "@mui/system";

function Form() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target.name;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <Box component="main">
      <div>
        <h1 className="heading">Personal info</h1>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Please provide your name, email address, and phone number.
        </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">
            <h5>Name</h5>
            <TextField type="text" name="name" onChange={handleChange} />
          </label>
        </div>
        <label className="label">
          <h5>Email Address</h5>
          <TextField type="email" name="email" onChange={handleChange} />
        </label>
        <label className="label">
          <h5>Phone Number</h5>
          <TextField type="number" name="phoneNumber" onChange={handleChange} />
        </label>
        <div>
          <Button type="submit" variant="contained" color="primary">
            Next Step
          </Button>
        </div>
      </form>
    </Box>
  );
}
export default Form;
