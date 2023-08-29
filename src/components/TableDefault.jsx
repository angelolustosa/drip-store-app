import React from "react";
import { Table } from "react-bootstrap";

export const TableDefault = (props) => {

  const loadColumns = () => {
    console.log('columns', props.columns)
     if(props.columns) {
      props.columns.map(column => <th>column</th>)
    }
  }

  const loadData = () => {
    props.data.map(item =>  <tr>
      <td>{item.id}</td>
      <td>{item.nome}</td>
      <td>{item.desconto}</td>
    </tr>)
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {/* {loadColumns()} */}
          {Object.keys(props.data[0]).map(column => <th>{column}</th>)}
          {console.log(Object.keys(props.data[0]))}
        </tr>
      </thead>
      <tbody>
        {/* {props.data.map(item =>  <tr>
      <td>{item._id}</td>
      <td>{item.nome}</td>
      <td>{item.desconto}</td>
    </tr>)} */}

    
        {/* <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </Table>
  );
};
