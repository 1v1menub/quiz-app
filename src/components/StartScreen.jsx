
const StartScreen = ({startGame, category, selectCategory}) => {

    return (
        <div className="nogamecont">
            <h1 className="starttitle">Quiz App</h1>
            <p className="starttext">Test your knowledge!</p>
            <span className="ignacio">Made by Ignacio Rubio</span>
            <div className="selectbutton">
                <select className="selectcat" id="category" value={category} onChange={selectCategory} name="category">
                    <option value="">All</option>
                    <option value="category=9&">General Knowledge</option>
                    <option value="category=10&">Books</option>
                    <option value="category=11&">Film</option>
                    <option value="category=12&">Music</option>
                    <option value="category=14&">TV</option>
                    <option value="category=15&">Video Games</option>
                    <option value="category=17&">Nature</option>
                    <option value="category=18&">Computers</option>
                    <option value="category=19&">Math</option>
                    <option value="category=21&">Sports</option>
                    <option value="category=22&">Geography</option>
                    <option value="category=23&">History</option>
                    <option value="category=25&">Art</option>
                    <option value="category=27&">Animals</option>
                    <option value="category=28&">Vehicles</option>
                    <option value="category=29&">Comics</option>
                    <option value="category=31&">Anime & Manga</option>
                </select>
                <button className="startbutton" onClick={() => {startGame()}}>Start Quiz</button>
            </div>
        </div>
    )
}



export default StartScreen