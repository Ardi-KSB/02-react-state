import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  console.log(username);

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  console.log(password);

  return (
    <Container fluid="md-3">
      <Card className="m-md-3" style={{ width: "50%" }}>
        <Card.Header>Belajar React State dengan Bootstrap</Card.Header>
        <input
          size="sm"
          className="m-md-3"
          type="text"
          value={username}
          name="username"
          placeholder="Username"
          onChange={handleChangeUsername}
        />
        <input
          size="sm"
          className="m-md-3"
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={handleChangePassword}
        />
        <Button
          size="sm"
          className="m-md-3"
          variant="primary"
          onClick={() => console.log(username, password)}
        >
          Login-1
        </Button>
      </Card>
    </Container>
  );
}
export default Login;
