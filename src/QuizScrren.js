import React from "react"

export default function QuizScreen(props){
  const [quiz, setQuiz] = React.useState([])
    
    React.useEffect(() => {
        async function getQuizes() {
          const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
          const data = await res.json()
    
          console.log(data.results)
          data.results.map(item =>{
            return item.incorrect_answers.push(item.correct_answer)
          })
          data.results.map(item =>{
            return {
                ...item,
                isHeld:false
            }
          })
          setQuiz(data.results)

          
        }
        getQuizes()
    
      }, [])
      function checkAnswerd(item){
        console.log(item)
        console.log(quiz)
        quiz.map(ans =>{
            debugger
            if (ans.correct_answer === item) {
                console.log("corret")
            }else {
                ans.incorrect_answers.map(i =>{
                    if (i === item) {
                console.log("incorret")
                        
                    }
                })
            }
        })
      }
      // const quizElement=""
      const quizElement = quiz.map((quiz, i) => {
        return (
          <div>
            <p className="question" key={i}>{quiz.question}</p>
            {/* {quiz.incorrect_answers.push(quiz.correct_answer)}  */}
            <ul className="chip"> {quiz.incorrect_answers.map((item,i) =>{
                return(
                   <li className="answer" key={i} onClick={() => checkAnswerd(item)}>{item}</li>
                )
            })} </ul> 
          </div>
        )
      })
    console.log(props)
    return(
        <div className="quiz-screen">
            {quizElement}
        </div>
    )
}