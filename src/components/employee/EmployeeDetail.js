import { useLocation } from "react-router-dom";
export default function EmployeeDetail(){
   const {id,name,birthday,card,phone,email,wage,degree,position,division} = useLocation();
    return(
        <>
       
        
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
                    </tr>
                    </thead>
                    <tbody>
                    {
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                        </tr>
                    }
                    </tbody>
                </table>
        </>
       )
}



