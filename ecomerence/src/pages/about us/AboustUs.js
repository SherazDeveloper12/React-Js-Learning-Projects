import "../../pages/about us/about.css";
import Header from "../../components/header/Header";
import { useState } from "react";
// import data from '../../constant/tabledata';
import TableData from "../../components/tableData/TableData.js";
import AddClient from "../../components/addClient/AddClient.js";
export default function AboutUs() {
  const defaultUsers = [
    {
      id: 1,
      username: "John Doe",
      age: 28,
      email: "johndoe@gmail.com",
      password: "john123",
    },
    {
      id: 2,
      username: "usman",
      age: 34,
      email: "janesmith@gmail.com",
      password: "jane123",
    },
    {
      id: 3,
      username: "Mike Johnson",
      age: 45,
      email: "mikejohnson@gmail.com",
      password: "mike123",
    },
  ];

  const getInitialUsers = () => {
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved) : defaultUsers;
  };

  const [newdata, setdata] = useState(getInitialUsers());

  const onclickhandler = (id) => {
    const filtereddata = newdata.filter((item) => item.id !== id);
    setdata(filtereddata);
    localStorage.setItem("users", JSON.stringify(filtereddata));
  };

  const AddNewUser = (data) => {
    const maxId =
      newdata.length > 0 ? Math.max(...newdata.map((u) => u.id)) : 0;
    const newUser = {
      id: maxId + 1,
      username: data.username,
      email: data.email,
      password: data.password,
    };
    const updatedData = [...newdata, newUser];
    setdata(updatedData);
    localStorage.setItem("users", JSON.stringify(updatedData));
  };

  return (
    <div className="aboutus">
      <Header />
      <div className="AddClientDiv">
        <table>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Controls</th>
          </tr>
          {newdata.map((item, index) => (
            <TableData
              data={item}
              key={item.id}
              onclickhandler={onclickhandler}
            />
          ))}
        </table>
        <div className="addclient">
          <AddClient AddNewUser={AddNewUser} />
        </div>
      </div>
    </div>
  );
}
