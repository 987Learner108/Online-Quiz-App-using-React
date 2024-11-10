import React, { useState, useEffect } from "react";
import "./GeographyQuiz.css"; // Place your CSS styles here if separate

const GeographyQuiz = () => {
    const question = [
        { Que: 'What is the largest continent on Earth?', a: 'Africa', b: 'Asia', c: 'North America', d: 'Antarctica', correct: 'b' },
        { Que: 'Which river is the longest in the world?', a: 'Amazon', b: 'Nile', c: 'Yangtze', d: 'Mississippi', correct: 'b' },
        { Que: 'Which country has the largest population?', a: 'India', b: 'China', c: 'United States', d: 'Indonesia', correct: 'b' },
        { Que: 'What is the capital city of Australia?', a: 'Sydney', b: 'Canberra', c: 'Melbourne', d: 'Brisbane', correct: 'b' },
        { Que: 'Which desert is the largest in the world?', a: 'Sahara', b: 'Arabian', c: 'Gobi', d: 'Kalahari', correct: 'a' },
        { Que: 'What mountain range separates Europe from Asia?', a: 'Himalayas', b: 'Rockies', c: 'Ural Mountains', d: 'Andes', correct: 'c' },
        { Que: 'Which ocean is the largest?', a: 'Atlantic Ocean', b: 'Indian Ocean', c: 'Arctic Ocean', d: 'Pacific Ocean', correct: 'd' },
        { Que: 'What is the smallest country in the world?', a: 'Monaco', b: 'San Marino', c: 'Vatican City', d: 'Liechtenstein', correct: 'c' },
        { Que: 'Which country is known as the Land of the Rising Sun?', a: 'China', b: 'Japan', c: 'South Korea', d: 'Thailand', correct: 'b' },
        { Que: 'What is the capital of Canada?', a: 'Toronto', b: 'Vancouver', c: 'Ottawa', d: 'Montreal', correct: 'c' }
    ];

    const [index, setIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [markedQuestions, setMarkedQuestions] = useState(Array(question.length).fill(null));

    useEffect(() => {
        setSelectedAnswer(markedQuestions[index]);
    }, [index]);

    const loadQuestion = () => question[index];

    const handleSelect = (option) => {
        setSelectedAnswer(option);
        const updatedMarks = [...markedQuestions];
        updatedMarks[index] = option;
        setMarkedQuestions(updatedMarks);
    };

    const handleNext = () => {
        if (index < question.length - 1) setIndex(index + 1);
    };

    const handlePrev = () => {
        if (index > 0) setIndex(index - 1);
    };

    const submitQuiz = () => {
        const correctAnswers = markedQuestions.reduce((acc, answer, idx) => (answer === question[idx].correct ? acc + 1 : acc), 0);
        alert(`Thank you for playing! You got ${correctAnswers} / ${question.length} correct.`);
    };

    return (
        <div>
            <NavBar />
            <div className="main">
                <div id="box">
                    <h2 id="qbox">{index + 1}) {loadQuestion().Que}</h2>

                    <div id="option1" className={`option ${selectedAnswer === 'a' ? 'selected' : ''}`} onClick={() => handleSelect('a')}>
                        {loadQuestion().a}
                    </div>
                    <div id="option2" className={`option ${selectedAnswer === 'b' ? 'selected' : ''}`} onClick={() => handleSelect('b')}>
                        {loadQuestion().b}
                    </div>
                    <div id="option3" className={`option ${selectedAnswer === 'c' ? 'selected' : ''}`} onClick={() => handleSelect('c')}>
                        {loadQuestion().c}
                    </div>
                    <div id="option4" className={`option ${selectedAnswer === 'd' ? 'selected' : ''}`} onClick={() => handleSelect('d')}>
                        {loadQuestion().d}
                    </div>

                    <button className="btn" id="prevBtn" onClick={handlePrev}>Prev</button>
                    <button className="btn" id="nextBtn" onClick={handleNext}>Next</button>
                </div>

                <div id="palette">
                    <h3>Question Palette</h3>
                    <p>Marked: <span id="markedCount">{markedQuestions.filter(q => q).length}</span></p>
                    <p>Remaining: <span id="remainingCount">{question.length - markedQuestions.filter(q => q).length}</span></p>
                </div>

                <button className="btn" id="submitBtn" onClick={submitQuiz}>Submit</button>
            </div>
            <Footer />
        </div>
    );
};

const NavBar = () => (
    <nav>
        <h1>Quiz on Geography</h1>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
);

const Footer = () => (
    <footer>
        <p>This quiz covers important geographical topics such as continents, countries, and landmarks.</p>
        <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
        </div>
    </footer>
);

export default GeographyQuiz;
