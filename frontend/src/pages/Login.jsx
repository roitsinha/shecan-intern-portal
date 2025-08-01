import React from "react";

function Login() {
  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <form style={styles.form}>
        <input type="email" placeholder="Email" required style={styles.input} />
        <input
          type="password"
          placeholder="Password"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Login
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
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
  },
};

export default Login;
