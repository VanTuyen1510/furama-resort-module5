import { useEffect, useState } from "react";
import * as EmployeeService from "../../services/employee/EmployeeService";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from "react-router-dom";
import Example from "../../modal/modal";



export default function EmployeeList(){
   const[employee,setEmployee] = useState([]);
   const[name,setName] = useState("");
   const[degree,setDegree] = useState("");
   

   useEffect(() => {
      getAll(); 
   },[name,degree]);

   const getAll = async() => {
      let temp = await EmployeeService.getAllEmployee(name,degree);
      setEmployee(temp);
      console.log(temp);
   }
   
//    const handleDelete = async(id) => {
//     // console.log(id);
//        await EmployeeService.deleteEmployee(id);
//        getAll();
//    }
   

   
   if(!employee) {
    return null;
  }

   return(
    <>
    <h1>Employee List</h1>
    <div>
    <h5>Search name :</h5>
    <input onChange={(evt) => setName(evt.target.value)}/>
    </div>
    <div>
    <h5>Search degree :</h5>
    <input onChange={(evt) => setDegree(evt.target.value)}/>
    </div>

   
    
    <div>
    <Link to="/employeeCreate">
          Create new Book
        </Link>
    </div>
       
       <table className="table">
                <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Birthday</th>
                    <th scope="col">Card</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Wage</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Position</th>
                    <th scope="col">Division</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>
                {

                    employee.map((values, index) => {
                        return (
                            <tr key={index}>
                                <td>{values.id}</td>
                                <td>{values.name}</td>
                                <td>{values.birthday}</td>
                                <td>{values.card}</td>
                                <td>{values.phone}</td>
                                <td>{values.email}</td>
                                <td>{values.wage}</td>
                                <td>{values.degree}</td>
                                <td>{values.position.type}</td>
                                <td>{values.division}</td>
                                <td>
                                    <button type="button"  >
                                    <Link  className="update-"   to={"/employeeUpdate/" + values.id}>
                                    Update
                                   </Link>  
                                    </button>
                                </td>
                                {/* <td><button type="button" onClick={() => handleDelete(values.id)}>Delete</button></td> */}
                                <td><Example id={values.id}/></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
    </>
   )
}
