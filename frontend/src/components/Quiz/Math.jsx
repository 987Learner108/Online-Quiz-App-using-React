import React, { useState, useEffect } from "react";
import "./GeographyQuiz.css"; // Place your CSS styles here if separate

const Math = () => {
    const question = [
        { Que: 'What is the value of π (pi) to two decimal places?', a: '2.14', b: '3.14', c: '3.16', d: '3.00', correct: 'b' },
        { Que: 'What is the square root of 144?', a: '10', b: '12', c: '14', d: '16', correct: 'b' },
        { Que: 'What is 15% of 200?', a: '25', b: '30', c: '35', d: '40', correct: 'b' },
        { Que: 'What is the next prime number after 7?', a: '8', b: '9', c: '10', d: '11', correct: 'd' },
        { Que: 'What is the value of x in the equation 2x + 3 = 11?', a: '3', b: '4', c: '5', d: '6', correct: 'b' },
        { Que: 'What is the area of a rectangle with length 5 and width 3?', a: '15', b: '10', c: '12', d: '8', correct: 'c' },
        { Que: 'If a triangle has angles of 90° and 45°, what is the third angle?', a: '45°', b: '60°', c: '30°', d: '75°', correct: 'a' },
        { Que: 'What is the greatest common divisor (GCD) of 12 and 16?', a: '2', b: '4', c: '6', d: '8', correct: 'b' },
        { Que: 'What is 7 multiplied by 8?', a: '54', b: '56', c: '58', d: '60', correct: 'b' },
        { Que: 'What is the value of 3 cubed?', a: '6', b: '9', c: '27', d: '81', correct: 'c' }
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
        <h1>Quiz on Math</h1>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
);

const Footer = () => (
    <footer>
        <p>his quiz covers important topics in math such as complex number, integer, and roots.</p>
        <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
        </div>
    </footer>
);

export default Math;
