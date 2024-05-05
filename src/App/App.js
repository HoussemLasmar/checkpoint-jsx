

import React from 'react';
import '../App/App.css';
import { Container, Card } from 'react-bootstrap';
import products from '../Data/Product.json';
import Navbar from '../Components/navbar';

function App() {
  return (
    <div>

      <p>Hello Houssem Lasmar there!</p>
      <Navbar />

      <div className='flex flex-wrap'>
      {
    products.products.map((product) =>(
      <div className="border my-5 w-96"> 
        <h3 className="text-red-500">{product.title}</h3>

        <img width="100" src={product.thumbnail} alt=''/>

        <small className="bg-yellow-400">{product.price}$</small>
      </div>
    )

    )
  
}
      </div>
    </div>
  )
}

export default App;

