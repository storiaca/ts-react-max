import Input from "./components/Input";
function App() {
  return (
    <main>
      Let's get started!
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
    </main>
  );
}

export default App;
