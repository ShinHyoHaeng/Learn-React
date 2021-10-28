
import './App.css';
// import Person from "./Person"
// import Todo from './Todo'
import Book from './Book'

function App() {
  return (
    <>
      <Book 
        title="The Count of Monte Cristo" 
        author="Alexandre Dumas" 
        summary="Dantes is imprisoned on the island prison of Chateau d'If for 13 years, where he plots revenge against those who betrayed him. With the help of another prisoner, he escapes the island and proceeds to transform himself into the wealthy Count of Monte Cristo as part of his plan to exact revenge." 
        genre="Adventure" 
        release="1846-01-15"
        isbn={9788466717434}>
      </Book>
      {/* <Todo user="Haeng" name="cleaning" done={false} description="cleaning my room"/> */}
      {/* <Person country = "korea" name="Haeng" age="3"></Person> */}
    </>
  );
}

export default App;
