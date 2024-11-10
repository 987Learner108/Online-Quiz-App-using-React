import React from "react";
import { useLocation, Link } from "react-router-dom";
import './Home.css'; // Import the CSS file

function Home() {
    const location = useLocation();

    return (
        <div className="homepage">
            <header>
                <h1>Welcome to QuizMaster</h1>
                <nav>
                    <Link to="/signup">Register</Link>
                    <Link to="/">Login</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>

            <div className="container">
                {/* Sidebar with links to subjects */}
                <aside className="sidebar">
                    <h3>Select Subject</h3>
                    <ul>
                        <li><Link to="/quiz/math">Math</Link></li>
                        <li><Link to="/quiz/science">Science</Link></li>
                        <li><Link to="/quiz/history">History</Link></li>
                        <li><Link to="/quiz/geography">Geography</Link></li>
                        <li><Link to="/quiz/literature">Literature</Link></li>
                    </ul>
                </aside>

                {/* Main content area */}
                <div className="main-content">
                    <h2>About QuizMaster</h2>
                    <p>QuizMaster is your ultimate platform for online quizzes, offering a wide range of subjects to test your knowledge. Join us today and challenge your skills!</p>
                    
                    {/* Image Gallery */}
                    <div className="gallery">
                        <img src="/img/mathm.jpeg" alt="Math Quiz" />
                        <img src="/img/sciencem.jpeg" alt="Science Quiz" />
                        <img src="/img/historym.jpeg" alt="History Quiz" />
                    </div>
                </div>
            </div>

            <footer>
                <p>&copy; 2024 QuizMaster. All Rights Reserved.</p>
                <p>Your one-stop platform for learning and testing your knowledge with exciting quizzes on various subjects.</p>
                
                {/* Social Media Links */}
                <div className="social-media">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="/srg/fb_footer.svg" alt="Facebook" /></a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src="/srg/new_twitter.svg" alt="Twitter" /></a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src="/srg/linkedin_footer.svg" alt="LinkedIn" /></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src="/srg/instagram_footer.svg" alt="Instagram" /></a>
                </div>

                {/* Additional links */}
                <ul>
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>
                </ul>
            </footer>
        </div>
    );
}

export default Home;
