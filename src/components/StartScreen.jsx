
const StartScreen = ({startGame}) => {

    return (
        <div className="nogamecont">
            <h1 className="starttitle">Quiz App</h1>
            <span>Version:<span style={{fontStyle: "italic", color: "#fb3310"}}> pasame-tu-correo.0</span></span>
            <p className="starttext">"Te estaba tomando atención"</p>
            <span className="ignacio">Hecho por Ignacio Rubio</span>
            <span className="grecia">para Grecia Delgado</span>
            <button className="startbutton" onClick={() => {startGame()}}>Empezar Quiz</button>
        </div>
    )
}



export default StartScreen