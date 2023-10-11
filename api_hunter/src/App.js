import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [record,setRecord] = useState([]);

  useEffect(()=>{
    fetch(`https://dummyjson.com/users`)
    .then(res => res.json())
    .then(data => setRecord(data.users))
    .catch(err => console.log(err));

    // axios.get(`https://dummyjson.com/users`)
    // .then((res)=>{
    //   setRecord(res.data.users)
    // }).catch((err)=>{
    //   console.log(err);
    //   return false;
    // })
  },[])
  console.log(record);

  return (
    <center>
      <h1>axios & fetch</h1> <br></br>
      <table border={1} cellspacing="2" cellpadding="20">
        <thead>
          <tr>
            <td>ID</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Gender</td>
            <td>Email</td>
            <td>Phone</td>
            <td>Password</td>
            <td>IMG</td>
          </tr>
        </thead>
        <tbody>
          {
            record.map((val)=>{
              const {id,firstName,lastName,gender,email,phone,password,image} = val
              return(
                <tr>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{gender}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{password}</td>
                  <td>
                    <img src={image} width={100} />
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      
    </center>
  );
}

export default App;
