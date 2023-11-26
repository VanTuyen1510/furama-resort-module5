import { useEffect, useState } from "react";
import * as EmployeeService from "../../services/employee/EmployeeService";
import { Formik, Form, Field,ErrorMessage} from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";


export default function EmployeeCreate() {
  const navigate = useNavigate();
  const[position,setPosition] = useState([]);

  const employeeInit = {
    name: "",
    birthday: "",
    card: "",
    phone: "",
    email: "",
    degree: "",
    position: [],
    division: "",
    wage: 0,
  };

  useEffect(() => {
    positionEmployee();
  },[])

  const employeeValidate = {
    name : Yup.string()
    .required("Required")
    .matches(/^[A-Z][a-z]*( [A-Z][a-z]*)*$/),
    birthday : Yup.string()
    .required("Required"),
    card : Yup.string()
    .required("Required")
    .matches(
      /^[0-9]{9}$|^[0-9]{12}$/,
      "ID Card must be 9 or 12 digits"),
      phone : Yup.string()
      .required("Required")
      .matches(/^090\d{7}$|^091\d{7}$/, "Invalid phone number"),
    email : Yup.string()
    .required("Required")
    .matches(/^[a-z0-9]+@gmail\.com$/, "Invalid email")
  }
  
  const saveNewEmployee = async (values) => {
    values.position = JSON.parse(values.position);
    console.log(values)
   await EmployeeService.saveEmployee(values);
   alert("Tạo mới thành công !");
   navigate("/"); 
  };

  const positionEmployee = async() => {
    let positionEmployee = await EmployeeService.getAllPosition();
    console.log(positionEmployee);
    setPosition(positionEmployee);
  }

  return (
    <>
      <Formik
        initialValues={employeeInit}
        onSubmit={(values) => {
          //call API
          saveNewEmployee(values);

        }}
        validationSchema={
          Yup.object(employeeValidate)
        }
      >
        <div className="container">
          <h1>Create employee</h1>
          <Form>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <Field type="text" className="form-control" name="name" id="" />
              <ErrorMessage style={{color : "red"}} name="name" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Birthday
              </label>
              <Field
                type="text"
                className="form-control"
                name="birthday"
                id=""
              />
              <ErrorMessage style={{color : "red"}} name="birthday" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Card
              </label>
              <Field type="text" className="form-control" name="card" id="" />
              <ErrorMessage style={{color : "red"}} name="card" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Phone
              </label>
              <Field type="text" className="form-control" name="phone" id="" />
              <ErrorMessage style={{color : "red"}} name="phone" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <Field type="text" className="form-control" name="email" id="" />
              <ErrorMessage style={{color : "red"}} name="email" component="span" className="form-err"></ErrorMessage>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                degree
              </label>
              <Field type="text" className="form-control" name="degree" id="" />
            </div>
            <div className="mb-3">
              <label>Position : </label>
              <br></br>
              <Field
                type="text"
                name="position"
                as="select"
              >
                <option value=''>Chon</option>
                {position.map((item) => (
                  <option key={item.id} value={JSON.stringify(item)}>
                    {item.type}
                  </option>
                ))}
              </Field>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                division
              </label>
              <Field
                type="text"
                className="form-control"
                name="division"
                id=""
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                wage
              </label>
              <Field type="text" className="form-control" name="wage" id="" />
              <ErrorMessage style={{color : "red"}} name="wage" component="span" className="form-err"></ErrorMessage>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </div>
      </Formik>
    </>
  );
}
