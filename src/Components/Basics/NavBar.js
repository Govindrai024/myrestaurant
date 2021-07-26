import React from 'react'

const NavBar = ({filterItems, manuList}) => {
    return (
        <div>
          
             
                    <nav className="navbar">
                        <div className="btn-group">
            {
                      manuList.map((CurElem) =>{ 
                      return(  <button className="btn-group__item" 
                        onClick={() => (filterItems(CurElem))}>
                       {CurElem}
                        </button>
                      )
                      })
            }            
                        </div>
    
                    </nav>
            
          
            
        </div>
    )
}


export default NavBar