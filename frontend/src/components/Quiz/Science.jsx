import React, { useState, useEffect } from "react";
import "./GeographyQuiz.css"; // Place your CSS styles here if separate

const Science = () => {
    const question = [
        {
            'Que': 'What is the chemical symbol for water?',
            'a': 'O2',
            'b': 'H2O',
            'c': 'CO2',
            'd': 'HO2',
            'correct': 'b'
        },
        {
            'Que': 'Which planet is known as the Red Planet?',
            'a': 'Earth',
            'b': 'Mars',
            'c': 'Jupiter',
            'd': 'Venus',
            'correct': 'b'
        },
        {
            'Que': 'What gas do plants absorb from the atmosphere?',
            'a': 'Oxygen',
            'b': 'Carbon Dioxide',
            'c': 'Nitrogen',
            'd': 'Hydrogen',
            'correct': 'b'
        },
        {
            'Que': 'What is the powerhouse of the cell?',
            'a': 'Nucleus',
            'b': 'Ribosome',
            'c': 'Mitochondria',
            'd': 'Endoplasmic Reticulum',
            'correct': 'c'
        },
        {
            'Que': 'Which part of the human brain controls memory?',
            'a': 'Cerebellum',
            'b': 'Frontal Lobe',
            'c': 'Temporal Lobe',
            'd': 'Occipital Lobe',
            'correct': 'c'
        },
        {
            'Que': 'What is the speed of light?',
            'a': '300,000 km/s',
            'b': '150,000 km/s',
            'c': '1,000 km/s',
            'd': '750,000 km/s',
            'correct': 'a'
        },
        {
            'Que': 'Which element has the atomic number 1?',
            'a': 'Helium',
            'b': 'Oxygen',
            'c': 'Hydrogen',
            'd': 'Lithium',
            'correct': 'c'
        },
        {
            'Que': 'What is the process by which plants make their food?',
            'a': 'Photosynthesis',
            'b': 'Respiration',
            'c': 'Transpiration',
            'd': 'Fermentation',
            'correct': 'a'
        },
        {
            'Que': 'Which organ is responsible for pumping blood throughout the body?',
            'a': 'Liver',
            'b': 'Brain',
            'c': 'Heart',
            'd': 'Kidney',
            'correct': 'c'
        },
        {
            'Que': 'What force keeps the planets in orbit around the sun?',
            'a': 'Friction',
            'b': 'Magnetism',
            'c': 'Gravity',
            'd': 'Inertia',
            'correct': 'c'
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
        <h1>Quiz on Science</h1>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#feedback">Feedback</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
);

const Footer = () => (
    <footer>
        <p>This quiz covers important topics in science such as physics, chemistry, and biology.</p>
        <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
        </div>
    </footer>
);

export default Science;
