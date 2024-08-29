import { useEffect } from "react";
import { getAllCats } from "../service/api";
import { useNavigate,Link } from "react-router-dom";

import { useState } from "react";
function Home(){

    const[cats, setCats]=useState([]);

    useEffect(()=>{
        getAll();
    },[]);
    let getAll=async()=>{
        let catResp=await getAllCats();

        setCats(catResp);
    }


     
    const navigate=useNavigate();
    const test=()=>{
        navigate('/new-cat')

    };

   
    return (

        <div className="Home">

        <button onClick={test}>Adauga detalii despre o pisica in baza de date</button>
        <h1>Lista de pisici</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Rasa</th>
                    <th>Nume Stapan</th>
                    <th>Varsta</th>
                </tr>
            </thead>

            <tbody>
    
                
    
    {

    
    
cats.length>0 &&(
cats.map(cats=>{
                return (
                 <tr>
                    <td><Link to={`/edit-cat/${cats.id}`}>{cats.id}</Link></td>
                    <td>{cats.rasa}</td>
                    <td>{cats.numeStapan}</td>
                    <td>{cats.varsta}</td>
                  </tr>
                )
            })
)

}
</tbody>

        </table>

        </div>


    );
    
    
    
}

export default Home;