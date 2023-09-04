import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

export const TableDefault = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {

    buscarUsuarios();
    console.log(`Tabela recarregou com dados da url ${props.url}`);
  }, [props.url]);

  const buscarUsuarios = async () => {
    try {
      const response = await axios.get(props.url);
      response.data.forEach(element => {
        /* delete element.address */
        /* delete element.company */
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getValuesObjectNested = object => {
    return Object.values(object).map(value => {
      if (typeof value === 'object') {
        return getValuesObjectNested(value)
      }
      return value
    }).join(', ')
  }

  const columns = data.length > 0 ? Object.keys(data[0]).map((column, index) => <th key={index}>{column}</th>) : [];

  {/* <td key={indexColumn}>{JSON.stringify(row[column])}</td> */ }
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns}
          </tr>
        </thead>
        <tbody>
          {data.map((row, indexRow) => (
            <tr key={indexRow}>
              {Object.keys(data[0]).map((column, indexColumn) => {
                //console.log(Object.keys(row[column]), row[column])
                if (typeof row[column] === 'object') {
                  //return <td key={indexColumn}>{JSON.stringify(row[column])}</td>
                  return <td key={indexColumn}>{getValuesObjectNested(row[column])}</td>
                } else {
                  return <td key={indexColumn}>{row[column]}</td>
                }
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
