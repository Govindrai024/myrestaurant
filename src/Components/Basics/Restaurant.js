import React,{useState} from 'react'
import './style.css'
import Manu from './manuApi'
import ManuCard from '../manuCard'

const Restaurant = () => {
     const [manuData, setmanuData] = useState(Manu)

     const filterItems = (category) => {
        const updatedList =   Manu.filter((curElem) =>{
            return curElem.category === category;
        })
        setmanuData(updatedList)
     }

    return (
        <div>
            <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={() => (filterItems('breakfast'))}>breakfast</button>
                    <button className="btn-group__item" onClick={() => (filterItems('lunch'))}>lunch</button>
                    <button className="btn-group__item"onClick={() => (filterItems('Evening'))}>Evening</button>
                    <button className="btn-group__item"onClick={() => (filterItems('Dinner'))}>Dinner</button>
                    <button className="btn-group__item"onClick={() => setmanuData(Manu)}>All</button>
                </div>

            </nav>
            <ManuCard manuData={manuData}/>
        </div>

    )
}

export default Restaurant