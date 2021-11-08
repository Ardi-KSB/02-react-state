import { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";

function Todo() {
  const [todos, setTodos] = useState(["Belajar React", "Belajar React State"]);
  const [inputTodo, setInputTodo] = useState("");
  const addTodo = () => {
    setTodos([...todos, inputTodo]);
  };
  const handleChanges = (event) => {
    setInputTodo(event.target.value);
  };
  console.log(inputTodo);

  const editTodo = (item) => {
    const inputPrompt = prompt();
    const gantiTodo = todos.map((todos, index) =>
      index == item ? inputPrompt : todos
    );
    setTodos(gantiTodo);
  };
  console.log(editTodo);

  return (
    <Container fluid="md-3">
      <Card className="m-md-3" style={{ width: "50%" }}>
        <Card.Header>Belajar React State Add, Delet, Edit Data</Card.Header>
        <input
          size="sm"
          className="m-md-3"
          type="text"
          placeholder="Tambahkan Data"
          onChange={handleChanges}
        />
        <Button
          size="sm"
          className="m-md-3"
          variant="primary"
          onClick={addTodo}
        >
          Add
        </Button>

        <div className="border m-md-3">
          {todos.map((item, index) => (
            <div>
              <h5 className="m-md-3">{item}</h5>
              <Button
                size="sm"
                className="m-md-3"
                variant="danger"
                onClick={() =>
                  setTodos(
                    todos.filter((filterIndex) => filterIndex !== index)
                  )
                }
              >
                {" "}
                Delete
              </Button>
              <Button
                size="sm"
                className="m-md-3"
                variant="success"
                onClick={() => editTodo(index)}
              >
                Edit
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </Container>
  );
}
export default Todo;
