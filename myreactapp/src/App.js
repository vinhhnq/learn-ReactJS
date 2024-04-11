import './App.css';
import Feature from "./components/Feature";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import State from "./components/State";
import Colorbox from "./components/Colorbox";
import Counting from "./components/Counting";
import Message from "./components/Message";
import FunctionClick from "./components/FunctionClick";
function App() {
  return (
    <div className="App">
      <Feature
        title="Title"
        description="lorem ipsumLorem Ipsum is simply
      dummy text of the printing and typesetting industry. Lorem Ipsum
      has been the industry's standard dummy text ever since the 1500s, when an
       unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
       It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
       publishing software like Aldus PageMaker including versions of Lorem Ipsum"
      />

      <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="clark" heroName="Super man">
        <button>Action</button>
      </Greet>

      <Welcome surname="nguyen" fullname="quang vinh"></Welcome>

      <State />
      <Colorbox />
      <Counting />
      <Message />
      <FunctionClick />
    </div>
  );
}

export default App;
