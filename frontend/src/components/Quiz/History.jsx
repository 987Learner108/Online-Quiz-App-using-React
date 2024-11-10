import React, { useState, useEffect } from "react";
import "./GeographyQuiz.css"; // Place your CSS styles here if separate

const History = () => {
    const question = [
        {
            'Que': 'Who was the first President of the United States?',
            'a': 'George Washington',
            'b': 'Thomas Jefferson',
            'c': 'Abraham Lincoln',
            'd': 'John Adams',
            'correct': 'a'
        },
        {
            'Que': 'In which year did the Titanic sink?',
            'a': '1910',
            'b': '1912',
            'c': '1914',
            'd': '1916',
            'correct': 'b'
        },
        {
            'Que': 'What was the primary cause of World War I?',
            'a': 'Economic rivalry',
            'b': 'Colonial expansion',
            'c': 'Militarism',
            'd': 'Assassination of Archduke Ferdinand',
            'correct': 'd'
        },
        {
            'Que': 'Which ancient civilization built the pyramids?',
            'a': 'Maya',
            'b': 'Greek',
            'c': 'Egyptian',
            'd': 'Roman',
            'correct': 'c'
        },
        {
            'Que': 'Who wrote the Declaration of Independence?',
            'a': 'James Madison',
            'b': 'Benjamin Franklin',
            'c': 'Thomas Jefferson',
            'd': 'John Hancock',
            'correct': 'c'
        },
        {
            'Que': 'What was the name of the ship that carried the Pilgrims to America?',
            'a': 'Mayflower',
            'b': 'Nina',
            'c': 'Pinta',
            'd': 'Santa Maria',
            'correct': 'a'
        },
        {
            'Que': 'Which war was fought between the North and South regions in the United States?',
            'a': 'World War I',
            'b': 'World War II',
            'c': 'Civil War',
            'd': 'Revolutionary War',
            'correct': 'c'
        },
        {
            'Que': 'Who was the first female Prime Minister of the United Kingdom?',
            'a': 'Theresa May',
            'b': 'Margaret Thatcher',
            'c': 'Angela Merkel',
            'd': 'Indira Gandhi',
            'correct': 'b'
        },
        {
            'Que': 'What was the main purpose of the Berlin Wall?',
            'a': 'To promote trade',
            'b': 'To divide East and West Berlin',
            'c': 'To prevent immigration',
            'd': 'To protect from invasions',
            'correct': 'b'
        },
        {
            'Que': 'Who discovered penicillin?',
            'a': 'Louis Pasteur',
            'b': 'Alexander Fleming',
            'c': 'Marie Curie',
            'd': 'Joseph Lister',
            'correct': 'b'
        }
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
        <h1>Quiz on History</h1>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
);

const Footer = () => (
    <footer>
        <p>This quiz covers important topics in history such as world War, importand event, and discoveris date.</p>
        <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
        </div>
    </footer>
);

export default History;
