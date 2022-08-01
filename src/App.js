import "./App.css";
import { RiAccountCircleLine } from "react-icons/ri";
import Faq from "./Faq";

function App() {
  const data = [
    {
      question1: "How does Parkname seperate itself from other domain name parking companies ?",
      answer1: "Your domains are a valuable online property. As in any investment, you want the most efficient, easy way to make sure your property is going to be profitable.Do you own more than 1,000 domains?? As a professional domainer, you will find everything you need through Parkname to generate maximum profits from your domain portfolio.",
     
      question2: "Is park name actually free ?",
      answer2: "Yes Parkname is actually free",

      question3: "What you do ?",
      answer3: "urenrfroefr",

      question4: "When was Parkname first founded?",
      answer4: "Parkname first was founded in 18 November 2002 by Bill Gates",
    },
  ];

  return (
    <div className="App">
      <div className="about-us">
        <RiAccountCircleLine className="icon" />
        <div className="abb">
          <h3>About Us</h3>
          <p>4 articles in this Topic</p>
        </div>
      </div>
      <div className="dd">
        {data.map((d, key) => (
          <div key={key} className="box1">
            <div>
              <Faq question="question1" answer="answer1" />
              <Faq question="question2" answer="answer2" />
              <Faq question="question3" answer="answer3" />
              <Faq question="question4" answer="answer4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
