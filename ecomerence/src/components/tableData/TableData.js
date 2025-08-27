import './table.css'
export default function TableData(props) {
  return (
    <>
      <tr key={props.data.id}>
        <td>{props.data.id}</td>
        <td>{props.data.username}</td>
        <td>{props.data.email}</td>
        <td>{props.data.password}</td>
       <td>  <button style={{fontWeight: "bold", backgroundColor: "red", cursor: "pointer",color: "white" }} onClick={() => props.onclickhandler(props.data.id)}>Delete</button>
       <button style={{ backgroundColor: "lightgreen", color: "#414040", fontWeight: "bold" }} onClick={()=>props.onupdateclicker(props.data)}>Update</button>
      
        </td>
      </tr>
    </>
  )
}