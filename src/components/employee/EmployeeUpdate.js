import { useEffect, useState } from "react";
import * as EmployeeService from "../../services/employee/EmployeeService";
// import { saveEmployee } from "../../services/employee/EmployeeService";
import { Formik, Form, Field } from "formik";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EmployeeUpdate() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [position, setPosition] = useState([]);

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
  },[]);
  
  const updateEmployee = async (obj) => {
    await EmployeeService.updateEmployee({ ...obj,id });
    alert("Update thành công !");
    navigate("/");
  };

  const positionEmployee = async () => {
    let positionEmployee = await EmployeeService.getAllPosition();
    console.log(positionEmployee);
    setPosition(positionEmployee);
  };

  return (
    <>
      <Formik
        initialValues={employeeInit}
        onSubmit={(values) => {
          //call API
          updateEmployee(values);
        }}
      >
        <div className="container">
          <h1>Update employee</h1>
          <Form>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <Field type="text" className="form-control" name="name" id="" />
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
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Card
              </label>
              <Field type="text" className="form-control" name="card" id="" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Phone
              </label>
              <Field type="text" className="form-control" name="phone" id="" />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <Field type="text" className="form-control" name="email" id="" />
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
              <Field type="text" name="position" as="select">
                <option value="">Chon</option>
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
