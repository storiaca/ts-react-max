import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  return (
    <main>
      <Form>
        <Input type="text" label="Name" id="name" />
        <Input type="age" label="Age" id="age" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
