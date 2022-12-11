import PersonList from './components/PersonList';
import PersonAdd from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';

function App() {
  return (
    <div ClassName="App">
      <PersonAdd />
      <PersonList />
      <PersonRemove />
    </div>
  )
}
export default App;