import React from "react";

function Signup() {
  return (
    <div style={styles.container}>
      <h1>Signup</h1>
      <form style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          required
          style={styles.input}
        />
        <input type="email" placeholder="Email" required style={styles.input} />
        <input
          type="password"
          placeholder="Password"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Signup
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "auto",
  },
  input: {
    margin: "10px 0",
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
  },
};

export default Signup;
