import Input from "./components/Input";
import Button from "./components/Button";
import Form from "./components/Form";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);

    /* Type guards */
    // if (
    //   !data ||
    //   typeof data !== 'object' ||
    //   !('name' in data) ||
    //   !('age' in data)
    // ) {
    //     return;
    // }

    // // at this point, TypeScript knows that data MUST BE an object
    // // with a name and age property
    // // otherwise, the previous if statement would have returned
    // console.log(data);
    // customForm.current?.clear();
  }
  return (
    <main>
      <Form onSave={handleSave}>
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
