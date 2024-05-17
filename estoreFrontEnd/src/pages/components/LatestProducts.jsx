import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { FaRegStar } from "react-icons/fa6";
import axios from 'axios'
import './style.css'
const LatestProducts = () => {
  const { data, setData, filter, setFilterData } = useContext(ProductsContext)

  const getAllData = async (category) => {
    const res = await axios("http://localhost:8080/products")
    setData(res?.data)
    setFilterData(res?.data)
  }

  useEffect(() => {
    getAllData();
  }, [])

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/products/${id}`)
    getAllData();
  }
  return (
    <section className='latestProduct'>
      <h1>Latest Product</h1>
      <div className='grayBorder'></div>
      <div className='datas'>
        {
          filter.map((elem) => (
            <div className='productDiv' key={elem._id}>
              <img className='imgProduct' src={elem.img} alt="" />
              <br />
              <FaRegStar className='yellow' />
              <FaRegStar className='yellow' />
              <FaRegStar className='yellow' />
              <FaRegStar className='gray' />
              <FaRegStar className='gray' />
              <p>{elem.title}</p>
              <p>{elem.price}</p>
              <button onClick={() => deleteData(elem._id)}>DELETE</button>
            </div>
          ))
        }
      </div>


    </section>
  )
}

export default LatestProducts