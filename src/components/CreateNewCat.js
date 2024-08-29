import { useState } from "react";
import { addCat } from "../service/api";
import { useNavigate } from "react-router-dom";

function CreateNewCat() {


  const [rasa, setRasa] = useState("");
  const [numeStapan, setNumeStapan] = useState("");
  const [varsta, setVarsta] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();


  const create = async () => {
   

    let validErr = [];

    if (!rasa) {

      validErr.push("Rasa pisicii nu este completata");
    } else if (!/^[a-zA-Z]+$/.test(rasa)) {
      validErr.push("Rasa trebuie să conțină doar litere");
    }

    if (!numeStapan) {
      validErr.push("Numele stapanului nu este completat");
    } else if (!/^[a-zA-Z]+$/.test(numeStapan)) {
      validErr.push("Numela stapanului trebuie să conțină doar litere");
    }

    if (!varsta) {
      validErr.push("Varsta pisicii nu este completata");
    } else if (!/^\d+$/.test(varsta)) {
      validErr  .push("Varsta trebuie să conțină doar cifre");
    }

    if (validErr.length > 0) {
      setErrors(validErr);
      return;
    }



    const newCat = {
      rasa,
      numeStapan,
      varsta,
    };

    const catResp = await addCat(newCat);

    if (catResp) {
      setRasa("");
      setNumeStapan("");
      setVarsta("");
      setErrors([]);

      alert("S-au adaug detaliile despre pisica");
    } else {
      alert("Detaliile despre pisica nu au fost adaugate in baza dete");
    }


  

    
  };


  const auxx = () => {
    navigate("/");
  };

  return (
    <div className="CreateNewCat">
      <h1>New Cat</h1>
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
        <button type="button" id="submitBtn" onClick={create}>
          ADD NEW CAT
        </button>
      </p>
     
      <p>
        <button type="button" id="backBtn" onClick={auxx}>
          Înapoi la lista de PISICI
        </button>
      </p>

      </form>
    </div>
  );

}

export default CreateNewCat;
