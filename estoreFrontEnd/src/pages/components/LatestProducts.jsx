import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { FaRegStar } from "react-icons/fa6";
import axios from 'axios'
import './style.css'
import { useNavigate } from 'react-router-dom';

const LatestProducts = () => {
  const { data, setData, filter, setFilterData } = useContext(ProductsContext)
  const navigate = useNavigate()
  const getAllData = async () => {
    const res = await axios("http://localhost:8080/products")
    setData(res?.data)
    setFilterData(res?.data)
  }

  useEffect(() => {
    getAllData();
  }, [])


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
              <div className='productBody'>
              <div className='flex justify-content-center gap-0'>
              <FaRegStar className='yellow' />
              <FaRegStar className='yellow' />
              <FaRegStar className='yellow' />
              <FaRegStar className='gray' />
              <FaRegStar className='gray' />
              </div>
              <p>{elem.title}</p>
              <p>{elem.price}$</p>
              <button onClick={()=>navigate(`/${elem._id}`)}>READ MORE</button>
              </div>
            </div>
          ))
        }
      </div>


    </section>
  )
}

export default LatestProducts