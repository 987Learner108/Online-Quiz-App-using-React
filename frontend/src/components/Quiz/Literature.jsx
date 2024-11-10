import React, { useState, useEffect } from "react";
import "./GeographyQuiz.css"; // Place your CSS styles here if separate

const Literature = () => {
    const question = [
        {
            'Que': 'Who wrote "Pride and Prejudice"?',
            'a': 'Charlotte Brontë',
            'b': 'Jane Austen',
            'c': 'Mary Shelley',
            'd': 'Emily Dickinson',
            'correct': 'b'
        },
        {
            'Que': 'Which novel begins with the line "Call me Ishmael"?',
            'a': 'Moby-Dick',
            'b': 'Great Expectations',
            'c': 'The Great Gatsby',
            'd': 'To Kill a Mockingbird',
            'correct': 'a'
        },
        {
            'Que': 'Who is the author of "1984"?',
            'a': 'Aldous Huxley',
            'b': 'George Orwell',
            'c': 'Ray Bradbury',
            'd': 'Kurt Vonnegut',
            'correct': 'b'
        },
        {
            'Que': 'What is the title of the first Harry Potter book?',
            'a': 'Harry Potter and the Goblet of Fire',
            'b': 'Harry Potter and the Philosopher’s Stone',
            'c': 'Harry Potter and the Chamber of Secrets',
            'd': 'Harry Potter and the Prisoner of Azkaban',
            'correct': 'b'
        },
        {
            'Que': 'Which poet wrote "The Raven"?',
            'a': 'Walt Whitman',
            'b': 'Edgar Allan Poe',
            'c': 'Robert Frost',
            'd': 'Langston Hughes',
            'correct': 'b'
        },
        {
            'Que': 'Who wrote "The Catcher in the Rye"?',
            'a': 'F. Scott Fitzgerald',
            'b': 'J.D. Salinger',
            'c': 'Ernest Hemingway',
            'd': 'John Steinbeck',
            'correct': 'b'
        },
        {
            'Que': 'What is the main theme of Shakespeare’s "Hamlet"?',
            'a': 'Love',
            'b': 'Revenge',
            'c': 'Friendship',
            'd': 'Betrayal',
            'correct': 'b'
        },
        {
            'Que': 'Which novel features the character Jay Gatsby?',
            'a': 'The Grapes of Wrath',
            'b': 'The Great Gatsby',
            'c': 'The Old Man and the Sea',
            'd': 'A Tale of Two Cities',
            'correct': 'b'
        },
        {
            'Que': 'What is the literary term for a recurring theme or idea?',
            'a': 'Symbol',
            'b': 'Motif',
            'c': 'Allegory',
            'd': 'Metaphor',
            'correct': 'b'
        },
        {
            'Que': 'Who wrote the play "Death of a Salesman"?',
            'a': 'Arthur Miller',
            'b': 'Tennessee Williams',
            'c': 'Henrik Ibsen',
            'd': 'Sam Shepard',
            'correct': 'a'
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
        <p>This quiz covers important topics in literature such as novel, philoshoper, and writer.</p>
        <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#linkedin">LinkedIn</a>
        </div>
    </footer>
);

export default Literature;
