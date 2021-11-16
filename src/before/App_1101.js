
import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
// import Person from "./Person"
// import Book from './Book'
// import NameTag from './NameTag'
// import Counter from './Counter'
// import YoutubeVideo from './YoutubeVideo';
// import dummyData from './dummyData';

class App extends Component{
  render() {
    return<Todo user = "Haeng"></Todo>
  }
}

// function App() {
//   return (
//     <>
//       <div className="App">
//         <NameTag></NameTag>
//         {/* <Counter></Counter> */}
//       </div>
//       {/* <Book 
//         title="The Count of Monte Cristo" 
//         author="Alexandre Dumas" 
//         summary="Dantes is imprisoned on the island prison of Chateau d'If for 13 years, where he plots revenge against those who betrayed him. With the help of another prisoner, he escapes the island and proceeds to transform himself into the wealthy Count of Monte Cristo as part of his plan to exact revenge." 
//         genre="Adventure" 
//         release="1846-01-15"
//         isbn={9788466717434}>
//       </Book> */}
//       {/* <Todo user="Haeng" name="cleaning" done={false} description="cleaning my room"/> */}
//       {/* <Person country = "korea" name="Haeng" age="3"></Person> */}
//     </>
//   );
// }

// class App extends Component{
//   state = {
//     name: 'parent'
//   }

//   changeName = () => {
//     this.setState({name: "parent changed"})
//   }

//   render(){
//     console.log('parent')
//     const {name} = this.state
//     return(
//       <div className = "App">
//         <h1>{name}</h1>
//         <button type="button" onClick={this.changeName}>change Name</button>
//         <Counter></Counter>
//       </div>
//     )
//   }
// }

// function App(){
//   return(
//     <div className="App">
//       {/* 데이터 치환 */}
//       {dummyData.map(d => { // map(): 하나씩 순회
//         return(
//           <YoutubeVideo 
//             key={d.videoId}
//             videoId={d.videoId}
//             videoName={d.videoName}
//             videoLength={d.videoLength}
//             videoDescription={d.videoDescription}>

//             {/* 컨텐츠 삽입 */}
//             {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/K4EAg4pa4Ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            
//         </YoutubeVideo>
//         )
//       })}

//       {/* <YoutubeVideo 
//         videoId="123456789"
//         videoName="Christmas"
//         videoLength="23253"
//         videoDescription="it is video on christmas party">
//       </YoutubeVideo> */}

//     </div>
//   )
// }

export default App;
