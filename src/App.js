import React, {useState ,useEffect} from 'react'; 
import axios from 'axios';
import './App.css';
import 'animate.css'

import { GET__URL } from './util/api';
function App() {
  const [listCountry, setListCountry] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(()=>{
  //   setIsLoading(true)
  //   fetch('https://restcountries.com/v2/all')
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(res => {
  //     setIsLoading(false)
  //     setListCountry(res)
  //   })
  //   .catch(err => {
  //     console.log("err = ", err)
  //   })
  // }, [])

  // useEffect(()=>{
  //   getList()
  // }, [])  

  // const getList = async() => {
  //   setIsLoading(true)
  //   try{ 
  //     const response = await axios.get('https://restcountries.com/v2/all')
  //     setIsLoading(false)
  //     setListCountry(response.data)
  //   }catch(err){
  //     console.log("err = ", err)
  //   }
  // }

  // useEffect(()=>{
  //   getList()
  // },[])
  // const callIpi = () => {
  //   return axios.get('https://restcountries.com/v2/all')
  // }
  
  // const getList = async() => {
  //   setIsLoading(true)
  //   const response = await callIpi()
  //   console.log(response)
  //   setTimeout(()=>{
  //     if(response.status === 200){
  //       setIsLoading(false)
  //       setListCountry(response.data)
  //     }else{
  //       setIsLoading(false)
  //     }
  //   }, 5000)
  // }

  
  const BASE_URL = ('https://restcountries.com/v2/all')
  const callApi = () => {
    return axios.get(`${BASE_URL}`)
  }

  useEffect(()=>{
    getList()
  },[])

  const getList = async() => {
    setIsLoading(true)
    const response = await callApi()
    console.log("reponse", response)
    try{
      setIsLoading(false)
      setListCountry(response.data)
    }catch(err){
      console.log("err =", err)
    }
  }
  console.log("listCountry = ", listCountry)


  return (
    <div className="App">
    <h1 className='animate__animated animate__backInLeft'>List Country</h1>
      {isLoading ? (<div className='loading'></div>) : 
        (<div>
          {listCountry.map((item, array, index)=>{
            return(
              <p>{item.name}</p>
            )
          })}
        </div>)
      }
    </div>
  );
}

export default App;
