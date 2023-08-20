import { useState } from "react"
import './evento.css'
function Cadastro() {
    const [nome, setNome] = useState('');
    const [data, setData] = useState('');
    const [evento, setEvento] = useState([
        {
            id: 1,
            nome: 'Como cuidar do seu PET',
            data: '19/08/2023',
            imagem: 'http://www.caesegatosveterinaria.com.br/wp-content/uploads/2021/04/Echosis-C%C3%A3es-e-Gatos-Ciclo-01-Abril-05-1024x1024.jpg'
        },
        {
            id: 2,
            nome: 'Qual a alimetação adequada para seu PET',
            data: '10/09/2023',
            imagem: 'https://static.ndmais.com.br/2021/06/istock-1137592020-800x534.jpg'
        },
        {
            id: 3,
            nome: 'A importância dos esportes para o PET',
            data: '02/01/2024',
            imagem: 'https://www.joaoalberto.com/wp-content/uploads/2017/02/07/praia-de-cachorro-768x480.jpg'
        }


    ]);
    const handleName = (e) => { setNome(e.target.value) }
    const handleData = (e) => { setData(e.target.value) }


    function enviar() {
        const newEvent = {
            'id': evento.length + 1,
            'Nome': nome,
            'Data': data
        }
        setEvento([...evento, newEvent])
    }
    console.log(evento)
    return (
        <>
            <h1>Cadastro de Eventos</h1>
            <form>
                <label>NOME:</label><br />
                <input type="text" onChange={handleName} className="ievento" /><br />
                <label>DATA:</label><br />
                <input type="date" onChange={handleData} className="ievento"/><br />
                <label>IMAGEM:</label><br />
                <input type="file" className="ievento"/>
                <button onClick={enviar} className="bevento">Cadastrar</button>
            </form>
            <div className="conjunti">
                {evento.map((eventos) => (
                    <div key={eventos.id} className="Individual">
                        <h4> {eventos.nome}</h4>
                        {console.log(evento.nome)}
                        <p>Data: {eventos.data}</p>
                        <img src={eventos.imagem}></img>
                    </div>))
                }


            </div>
        </>
    )

}
export default Cadastro