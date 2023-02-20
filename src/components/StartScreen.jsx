import { useState, useEffect } from "react"
import toast from "react-hot-toast"

const StartScreen = ({startGame}) => {

    const [goRiddle, setGoRiddle] = useState(false)

    const [formData, setFormData] = useState("")

    useEffect(() => {
        const respuestasvalidas = ["teamo", "te amo", "té amo", "téamo"]
        for(let i = 0; i < respuestasvalidas.length; i++) {
            if(formData.toLowerCase() === respuestasvalidas[i]) {
                startGame(true)
                toast.dismiss()
                toast("Puerta desbloqueada 😜", {
                    icon: "🚪"
                })
            }
        }
    }, [formData])

    return (
        <div className="nogamecont">
            {!goRiddle ? <>
                <h1 className="starttitle">Quiz App</h1>
                <span>Version:<span style={{fontStyle: "italic", color: "#fb3310"}}> pasame-tu-correo.0</span></span>
                <p className="starttext">"Te estaba tomando atención"</p>
                <span className="ignacio">Hecho por Ignacio Rubio</span>
                <span className="grecia">para Grecia Delgado</span>
                <button className="startbutton" onClick={() => {setGoRiddle(true)}}>Empezar Quiz</button>
            </> : 
            <div style={{maxWidth: "1000px", width: "100%", display: "flex", flexDirection: "column"}}>
                <span className="riddleriddle">¿Cuál es la infusión más intensa?</span>
                <input type="text" value={formData} onChange={(e) => {setFormData(e.target.value)}} className="riddle-input-form" placeholder="Puerta automática"/>
            </div>}
        </div>
    )
}



export default StartScreen