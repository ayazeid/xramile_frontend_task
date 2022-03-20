import {useEffect,useState,useRef}from 'react'
import data from '../data/db.json'

export const usePaginator=(page)=>{
    const [pageProducts,setPageProducts]=useState([])
    const productsLimit= useRef(3).current
    useEffect(() => {
        setPageProducts(data['products'].splice(page, productsLimit))   
    }, [page]);
    return pageProducts
  }