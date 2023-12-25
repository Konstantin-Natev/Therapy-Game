import './App.css';
import { Filters } from './components/Filters/Filters';
import { Card } from './components/Card/Card';
import { useEffect, useState } from 'react';
import { categoriesQuestion } from './common/data';

function App() {
  const [category, setCategory] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const getAllQuestions = () => {
    if(category.length){
      setQuestions(categoriesQuestion[category]);
    }
  }

  const currentQuestionHandler = () => {
    if(questions.length !== 0) {
      if (questions.length >= currentQuestionIndex + 1) {
        setCurrentQuestion(questions[currentQuestionIndex]);
      } else {
        setCurrentQuestionIndex(0);
      }
    }
  }

  useEffect(() => {
    getAllQuestions();
    currentQuestionHandler();
  },[category, currentQuestionIndex, questions])

  return (
    <div className="App">
      {category.length === 0
      ?
        <Filters setCategory={setCategory} getAllQuestions={getAllQuestions}/>
      :
        <Card
          category={category}
          setCategory={setCategory}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}/>
      }
    </div>
  );
}

export default App;
