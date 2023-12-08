import './App.css';
import Header from './components/Header/Header';
import Todo from './components/Todo/Todo'
import DisplayTodo from './components/DisplayTod/DisplayTodo';

function App() {
  return (
    <section className="main">
      <Header />
      <Todo />
      {/* <DisplayTodo /> */}
    </section>
    );
}

export default App;
