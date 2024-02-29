import React, {useEffect} from "react";
import axios from "axios";
const callIpi = () => {
  useEffect(()=>{
    getList();
  },[])

  const getList = async() => {
    setIsLoading(true)
    const response = await callIpi()
    setTimeout(()=>{
      if(response.status === 200){
        setIsLoading(false)
        setListCountry(response.data)
      }else{
        setIsLoading(false)
      }
    }, 2000)
  }
  console.log("ListCountry = ", listCountry)
  
    return axios.get('https://restcountries.com/v2/all')
  }