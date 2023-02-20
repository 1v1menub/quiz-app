

const Answer = ({index, isSelected, text, selectAnswer, correct_answer, checked}) => {

    const calcColor = () => {
        if(isSelected) {
            if(checked) {
                if(text === correct_answer) {
                    return "#94D7A2"
                }
                else {
                    return  "#F8BCBC"
                }
            }
            else {
                return "#D6DBF5"
            }
        }
    }

    return (
        <div className="answer" style={{opacity: checked && !isSelected ? 0.5 : 1, backgroundColor: calcColor(), color: calcColor() === "#F5F7FB" ? "#293264" : "#293264"}} onClick={(() => {selectAnswer(index, text)})}>{text}</div>
    )
}

export default Answer