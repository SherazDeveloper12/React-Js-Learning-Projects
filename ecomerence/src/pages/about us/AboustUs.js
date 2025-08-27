import '../../pages/about us/about.css';
import Header  from "../../components/header/Header";
import { useState } from 'react';
// import data from '../../constant/tabledata';
import TableData from '../../components/tableData/TableData.js';
import AddClient from '../../components/addClient/AddClient.js';
export default function AboutUs() {
 
      const [newdata,setdata] = useState ([
    {
        id: 1,
        username: "John Doe",
        age: 28,
        email: "johndoe@gmail.com",
        password: "john123",
    },
    {
        id: 2,
        username: "Jane Smith",
        age: 34,
        email: "janesmith@gmail.com",
        password: "jane123"
    },
    {
        id: 3,
        username: "Mike Johnson",
        age: 45,
        email: "mikejohnson@gmail.com",
        password: "mike123"
    },
  ]);
  const [client, setclient] = useState(null);
 
 
   const onclickhandler = (id) => {
      
     let filtereddata = newdata.filter(item => item.id !== id);
     console.log(filtereddata);
    setdata([...filtereddata]);
    }
    const onupdateclicker = (updatingclient) => {
      setclient(updatingclient);
      console.log(client);
    }
    const onupdatehandler = (data, id) => {
      let updateddata = newdata.map(item => item.id === data.id ? data : item);
      setdata([...updateddata]);
      setclient(null);
    }     
   
    const AddNewUser = (data) => {
        
      setdata([...newdata, {
        id: newdata.length + 1,
        username: data.username,
        email: data.email,
        password: data.password,
      }]);}
  return (
   
    <div className="aboutus">
       <Header/>
<div className='AddClientDiv'>
      <table>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Controls</th>
                  

        </tr>
        {newdata.map((item,index) => (
          <TableData  onupdateclicker={onupdateclicker} data={item} key={index} onclickhandler={onclickhandler}/>
        ))}
      </table>
      <div className='addclient'>  
       <AddClient onupdatehandler={onupdatehandler} client={client} AddNewUser= {AddNewUser}/>
          </div>
    </div>
     </div>
  );
}