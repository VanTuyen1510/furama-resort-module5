import axios from "axios";

export const getAllEmployee = async (name,degree) => {
    let temp = await axios.get(`http://localhost:8080/employee?name_like=${name}&&degree_like=${degree}`);
    return temp.data;
}

export const saveEmployee = async(values) => {
    let temp = await axios.post("http://localhost:8080/employee",values);
    console.log(temp);
    return temp.status;
}

export const deleteEmployee = async(id) => {
    let temp = await axios.delete(`http://localhost:8080/employee/${id}`);
    return temp.data;
}

export const findById = async(id) => {
    let temp = await axios.get(`http://localhost:8080/employee/${id}`);
    console.log(temp);
    return temp.data;

}

export const updateEmployee = async(obj) => {
    let temp = await axios.put(`http://localhost:8080/employee/${obj.id}`,obj);
    return temp.status;
}

export const getAllPosition = async() => {
    let temp = await axios.get("http://localhost:8080/positon");
    return temp.data;
}

