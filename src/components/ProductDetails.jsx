
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Link, useHistory } from 'react-router-dom'
import SingleProduct from './SingleProduct'
import { domain, header } from '../env'
import { useGlobalState } from '../state/provider'
import './ProductDetails.css'

import sparkles from '../assests/white-sparkle-png-transparent-29.png'


const ProductDetails = () => {
   const {id} = useParams()
   const [product, setProduct] = useState(null)
   const [categoryproduct, setCategoryproduct] = useState(null)
   
   const [{ profile }, dispatch] = useGlobalState()

   const history = useHistory()

   useEffect(() => {
   const getdata = async()=>{
      await Axios({
        method: "get",
        url: `${domain}/api/product/${id}/`
      }).then(response => {
        //setProducts(res.data)
        console.log(response.data);
        setProduct(response.data)
        getcategory(response?.data?.category["id"])
    })
   }
   getdata()
}, [id])

   const getcategory = async(id) =>{
      await Axios({
         method : 'get',
         url:`${domain}/api/category/${id}/`
      }).then(response=>{
        console.log(response.data);
        setCategoryproduct(response.data)
      })
   }



   const addtocart = async (id) => {
       profile !== null ? (
           await Axios({
               method: 'post',
               url: `${domain}/api/addtocart/`,
               headers: header,
               data: { "id": id }
           }).then(response => {
               //console.log(response,"34 Add yo cart");
               dispatch({
                   type: "ADD_RELOADPAGE_DATA",
                   reloadpage: response
               })
           })
       ) : (
           history.push("/login")
       )
   }
   

  return (
    <div className="container">
       {
        product !== null &&
        (
            <>
            <div className="row">
                <img className="w-100 pro-img" src={product?.image} alt="" />
                <div className="col-md-7 p-2">
                    <h1>{product?.title}</h1>
                    <h2>Price: <del>{product?.marcket_price}TK.</del> {product?.selling_price}TK.</h2>
                </div>
                <div className="col-md-4 p-3">
                    <p onClick={() => addtocart(product?.id)} className="btn custom-btn-orange"><span>Add to Cart</span></p>
                 </div>
                   <p className='img-des'>{product.description}</p>
               </div>
            </>
        )
       }
       <div className="row related-products">
                <h1>Related Products</h1>
                {
                    categoryproduct !== null &&
                    categoryproduct[0]?.category_product?.map((product, i) => (
                        <div className="col-md-6 mt-2 " key={i} style={{ width: '30%',  height: '40%' }} >
                            <SingleProduct item={product} />
                        </div>
                    ))
                }
            </div>

            <div className="sparkle">
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
                <img src={sparkles} />
            </div> 
    </div>
  )
}

export default ProductDetails
