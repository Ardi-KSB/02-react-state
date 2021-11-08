import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

function Login2() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUser((preUser) => ({
      ...preUser,
      [name]: value,
    }));
  };
  console.log(user);

  return (
    <Container fluid="md-3">
      <Card className="m-md-3" style={{ width: "50%" }}>
        <Card.Header>Belajar React State dengan Bootstrap</Card.Header>
        <input
          size="sm"
          className="m-md-3"
          type="text"
          value={user.username}
          name="username"
          placeholder="Username"
          onChange={handleChangeUser}
        />
        <input
          size="sm"
          className="m-md-3"
          type="password"
          value={user.password}
          name="password"
          placeholder="Password"
          onChange={handleChangeUser}
        />
        <Button
          size="sm"
          className="m-md-3"
          variant="success"
          onClick={() => console.log(user.username, user.password)}
        >
          Login-2
        </Button>
      </Card>
    </Container>
  );
}
export default Login2;
