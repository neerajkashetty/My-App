import React from "react";
import './projectlist.scss';

export const Projectlist = ({title , active , setSelected,id}) =>{

    return(

        <li className={active ? "projectlist active " : "projectlist"} onClick={()=> setSelected(id)}> 
        {title}

        </li>


    )

}