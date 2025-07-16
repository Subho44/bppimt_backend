import React from 'react'
import { Table } from 'react-bootstrap';
import { productdata } from '../data';
const Home = () => {

  return <>
    <Table striped bordered hover responsive className='mt-3'>
      <tr>
        <th>Id</th>
        <th>Product</th>
        <th>Category</th>
        <th>Price($)</th>
        <th>Avtar</th>
      </tr>
      {
        productdata.map((x, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{x.name}</td>
            <td>{x.category}</td>
            <td>{x.price}</td>
            <td>
              <img src={x.image} alt='img' width={50} height={50}/>
            </td>
          </tr>
        ))
      }

    </Table>

  </>
}

export default Home