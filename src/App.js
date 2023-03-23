import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import UserData from './components/UserData/UserData';

function App() {
  return (
    <div className="App">
      <LoadData></LoadData>
    </div>
  );
}
function LoadData(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[])
  return(
    <div>
      <div>
      <Header></Header>
      </div>
      <div className='userList'>
      {
        users.map(user=><UserData 
          user={user}
          id={user.id}
           title={user.title} 
           completed={user.completed}
           ></UserData>
        
        )
      }
      </div>
    </div>
  )
}


export default App;
