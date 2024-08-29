import { getCatById, updateCatAge } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Update(){

    const {id}=useParams();

    const [rasa, setRasa] = useState("");
    const [numeStapan, setNumeStapan] = useState("");
    const [varsta, setVarsta] = useState("");
    const [errors, setErrors] = useState([]);

    let aux=async()=>{
        let data=await getCatById(id);

        setRasa(data.rasa);
        setNumeStapan(data.numeStapan);
    }


    useEffect(()=>{
        aux();
    },[])


    const updateCat=async()=>{
        const updateCatt={
            id,
            rasa,
            numeStapan,
            varsta
        };

        try{
            await updateCatAge(updateCatt);
            alert("Detaliile despre pisica au fost actualizate în baza de date");

        }catch(err){
            alert(err);
        }
    }

    const navigate=useNavigate();

    const test=()=>{
        navigate('/')
    };
  
  return(
    <form>
          <p>
            <label>Rasa</label>
            <input
              name="rasa"
              type="text"
              id="rasa"
              value={rasa}
              onInput={(e) => setRasa(e.target.value)}
            ></input>
          </p>

          <p>
            <label>Numele Stapanului</label>
            <input
              name="numeStapan"
              type="text"
              id="numeStapan"
              value={numeStapan}
              onInput={(e) => setNumeStapan(e.target.value)}
            ></input>
          </p>

          <p>
            <label>Varsta</label>
            <input
              name="varsta"
              type="text"
              id="varsta"
              value={varsta}
              onInput={(e) => setVarsta(e.target.value)}
            />
          </p>

          {errors.length > 0 && (
          <div>
            {errors.map((error, index) => (
              <p key={index} style={{ color: "red" }}>
                {error}
              </p>
            ))}
          </div>
        )}
        <p>
          <button type="button" id="submitBtn" onClick={updateCat}>
            Update  CAT
          </button>
        </p>
       
        <p>
          <button type="button" id="backBtn" onClick={test}>
            Înapoi la lista de PISICI
          </button>
        </p>

        </form>
  );

}

export default Update;