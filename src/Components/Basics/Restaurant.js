import React,{useState} from 'react'
import './style.css'
import Manu from './manuApi'
import ManuCard from './manuCard'
import NavBar from './NavBar'


const uniqueList = [
    ...new Set (
        Manu.map((curElem) =>{
            return curElem.category
        })
    ),"All"
]

const Restaurant = () => {
     const [manuData, setmanuData] = useState(Manu)
     const [manuList, setmanuList] = useState(uniqueList)

     const filterItems = (category) => {
         if(category === "All"){
             return setmanuData(Manu)
         }
        
        const updatedList =   Manu.filter((curElem) =>{
            return curElem.category === category;
        })
        setmanuData(updatedList)
     }

    return (
        <div>
            <NavBar  filterItems={filterItems} manuList={manuList} />
            <ManuCard manuData={manuData}/>
        </div>

    )
}

export default Restaurant