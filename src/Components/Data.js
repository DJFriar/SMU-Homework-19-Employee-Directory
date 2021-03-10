import React from "react";
import API from "../Utils/API";
import { Table } from 'react-bootstrap';
import moment from "moment";

export default class EmployeeList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.api()
  }

  api = () => {
    API.fetchEmployees().then(res => {
      this.setState({ users: res.data.results })
      console.log(res);
    })

  }

  render() {

    const users = this.state.users;
    

    const usersMap = users.map((user, index) => {
      const userdob = moment(user.dob.date).format('MM-DD-YYYY')
      return (
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>
            <img src={user.picture.thumbnail} />
          </td>
          <td>{`${user.name.first} ${user.name.last}`}</td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
          <td>{userdob}</td>
        </tr>
      )
    })

    return (

      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {usersMap}
        </tbody>
      </Table>

    );

  }
}

