import { useState } from "react";
import './pesquisa.css';

function Pesquisa() {

    const [input, setInput] = useState('')
    const [img, setImg] = useState('')
    const handleInput = (event) => setInput(event.target.value)

    const consultar = () => {
        fetch(`https://dog.ceo/api/breed/${input}/images/random`)
            .then(response => response.json())
            .then(date => setImg(date.message))
            .catch(error => console.log(error))
    }
    return (

        <>
            <h1>Pesquise aqui a raça do seu pet: </h1>
            <div className="form">
                <br />
                <label htmlFor="raca">Digite uma raça: </label><br /><br /><br />
                <input type="text" placeholder="Digite a raça do seu dog aqui!" value={input} onChange={handleInput} className="pesquisa" />
                <button onClick={consultar} className="bpesquisa">Pesquisar</button>

            </div>
            <br />
            <div className="img">
                {img && <img src={img} />}

            </div>
        </>
    )
}
export default Pesquisa