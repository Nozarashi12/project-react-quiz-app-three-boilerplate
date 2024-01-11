import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Result = (props) => {

  const navigate = useNavigate()

  const toQuiz=()=>{
    props.setScore(0)
    props.setAttempt(0)
    navigate('/quiz')
  }

  const toHome=()=>{
    props.setScore(0)
    props.setAttempt(0)
    navigate('/')
  }

  return (
    <div className='main3'>
      <h2 className='result-head'>Result</h2>
      <div className="box3">
        <h3 className="phrase">keep it up!!!!!!..</h3>
        <h2 className="score">Your score is {props.score}</h2>

        <div className="details">
          <div className="numberofq for-detail">
            <h4 className="d1">Total no of questions</h4>
            <h4 className='no1'>15</h4>
          </div>

          <div className="numberofq for-detail">
            <h4 className="d1">Number of attempted questions</h4>
            <h4 className='no1'>{props.attempt}</h4>
          </div>

          <div className="numberofq for-detail">
            <h4 className="d1">Number of corrected answers</h4>
            <h4 className='no1'>{props.score}</h4>
          </div>

          <div className="numberofq for-detail">
            <h4 className="d1">Number of wrong answers</h4>
            <h4 className='no1'>{props.attempt - props.score}</h4>
          </div>
        </div>
      </div>

      <div className="result-button-grp">
        <Link to='/quiz' onClick={toQuiz}><button className="result-buttons b1">Play again</button></Link>
        <Link to='/' onClick={toHome}><button className="result-buttons b2">Back to home</button></Link>
      </div>
    </div>
  );
};

export default Result;