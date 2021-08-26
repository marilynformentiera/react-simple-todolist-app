import './App.css';
import TodoList from './components/TodoList';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Todo List application</h1>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;