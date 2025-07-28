// Quiz App JavaScript - Complete and Working Version

// Quiz data with questions for each category
const quizData = {
    science: [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Cu"],
            correct: 0
        },
        {
            question: "What planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "What is the speed of light in vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
            correct: 0
        },
        {
            question: "Which organ produces insulin?",
            options: ["Liver", "Kidney", "Pancreas", "Heart"],
            correct: 2
        },
        {
            question: "What is the hardest natural substance?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2
        },
        {
            question: "How many bones are in an adult human body?",
            options: ["206", "210", "195", "220"],
            correct: 0
        },
        {
            question: "What gas makes up about 78% of Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2
        },
        {
            question: "What theory did Charles Darwin propose?",
            options: ["Theory of Relativity", "Evolution by Natural Selection", "Quantum Theory", "Big Bang Theory"],
            correct: 1
        },
        {
            question: "What is the smallest unit of matter?",
            options: ["Molecule", "Cell", "Atom", "Electron"],
            correct: 2
        },
        {
            question: "What force keeps planets in orbit around the sun?",
            options: ["Magnetic Force", "Gravity", "Nuclear Force", "Electric Force"],
            correct: 1
        }
    ],
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1944", "1945", "1946", "1947"],
            correct: 1
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
            correct: 2
        },
        {
            question: "Which ancient wonder of the world was located in Alexandria?",
            options: ["Hanging Gardens", "Lighthouse", "Colossus", "Mausoleum"],
            correct: 1
        },
        {
            question: "The Renaissance period began in which country?",
            options: ["France", "Germany", "Italy", "Spain"],
            correct: 2
        },
        {
            question: "Who painted the ceiling of the Sistine Chapel?",
            options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"],
            correct: 1
        },
        {
            question: "The Berlin Wall fell in which year?",
            options: ["1987", "1988", "1989", "1990"],
            correct: 2
        },
        {
            question: "Which empire was ruled by Julius Caesar?",
            options: ["Greek Empire", "Roman Empire", "Byzantine Empire", "Ottoman Empire"],
            correct: 1
        },
        {
            question: "The American Civil War began in which year?",
            options: ["1860", "1861", "1862", "1863"],
            correct: 1
        },
        {
            question: "Who was known as the 'Iron Lady'?",
            options: ["Queen Elizabeth II", "Margaret Thatcher", "Indira Gandhi", "Golda Meir"],
            correct: 1
        },
        {
            question: "The French Revolution began in which year?",
            options: ["1787", "1788", "1789", "1790"],
            correct: 2
        }
    ],
    sports: [
        {
            question: "How many players are on a basketball team during play?",
            options: ["4", "5", "6", "7"],
            correct: 1
        },
        {
            question: "In which sport would you perform a slam dunk?",
            options: ["Tennis", "Basketball", "Volleyball", "Football"],
            correct: 1
        },
        {
            question: "How often are the Summer Olympics held?",
            options: ["Every 2 years", "Every 3 years", "Every 4 years", "Every 5 years"],
            correct: 2
        },
        {
            question: "What is the maximum score possible in ten-pin bowling?",
            options: ["200", "250", "300", "350"],
            correct: 2
        },
        {
            question: "In golf, what is one stroke under par called?",
            options: ["Eagle", "Birdie", "Bogey", "Albatross"],
            correct: 1
        },
        {
            question: "How many Grand Slam tournaments are there in tennis?",
            options: ["3", "4", "5", "6"],
            correct: 1
        },
        {
            question: "What sport is played at Wimbledon?",
            options: ["Cricket", "Tennis", "Golf", "Rugby"],
            correct: 1
        },
        {
            question: "How many minutes are in a soccer match (excluding stoppage time)?",
            options: ["80", "85", "90", "95"],
            correct: 2
        },
        {
            question: "In which sport would you find a pommel horse?",
            options: ["Athletics", "Swimming", "Gymnastics", "Wrestling"],
            correct: 2
        },
        {
            question: "What is the highest possible hand in poker?",
            options: ["Full House", "Four of a Kind", "Straight Flush", "Royal Flush"],
            correct: 3
        }
    ],
    technology: [
        {
            question: "What does 'HTTP' stand for?",
            options: ["HyperText Transfer Protocol", "High Tech Transfer Protocol", "Home Tool Transfer Protocol", "Hyperlink Text Transfer Protocol"],
            correct: 0
        },
        {
            question: "Who founded Microsoft?",
            options: ["Steve Jobs", "Mark Zuckerberg", "Bill Gates", "Larry Page"],
            correct: 2
        },
        {
            question: "What does 'AI' stand for in technology?",
            options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Algorithmic Intelligence"],
            correct: 1
        },
        {
            question: "Which programming language is known as the 'language of the web'?",
            options: ["Python", "Java", "JavaScript", "C++"],
            correct: 2
        },
        {
            question: "What does 'URL' stand for?",
            options: ["Universal Resource Locator", "Uniform Resource Locator", "United Resource Locator", "Unique Resource Locator"],
            correct: 1
        },
        {
            question: "Which company developed the iPhone?",
            options: ["Samsung", "Google", "Apple", "Microsoft"],
            correct: 2
        },
        {
            question: "What does 'CPU' stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
            correct: 0
        },
        {
            question: "Which social media platform was founded by Mark Zuckerberg?",
            options: ["Twitter", "Instagram", "Facebook", "LinkedIn"],
            correct: 2
        },
        {
            question: "What does 'RAM' stand for in computing?",
            options: ["Random Access Memory", "Rapid Access Memory", "Remote Access Memory", "Real Access Memory"],
            correct: 0
        },
        {
            question: "Which search engine was founded by Larry Page and Sergey Brin?",
            options: ["Yahoo", "Bing", "Google", "DuckDuckGo"],
            correct: 2
        }
    ]
};

// Global variables for game state
let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let timer = null;
let timeLeft = 30;
let startTime = 0;
let totalTime = 0;

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateStats();
});

// Function to switch between screens
function showScreen(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(function(screen) {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Function to start a quiz for a specific category
function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    startTime = Date.now();
    
    document.getElementById('categoryName').textContent = category.charAt(0).toUpperCase() + category.slice(1);
    document.getElementById('totalQuestions').textContent = quizData[category].length;
    
    showScreen('quizScreen');
    loadQuestion();
}

// Function to load and display a question
function loadQuestion() {
    const question = quizData[currentCategory][currentQuestionIndex];
    selectedAnswer = null;
    timeLeft = 30;
    
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    
    // Update progress bar
    const progress = (currentQuestionIndex / quizData[currentCategory].length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Create option buttons
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach(function(option, index) {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = function() {
            selectAnswer(index);
        };
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('nextBtn').disabled = true;
    startTimer();
}

// Function to handle answer selection
function selectAnswer(index) {
    if (selectedAnswer !== null) return;
    
    selectedAnswer = index;
    clearInterval(timer);
    
    const options = document.querySelectorAll('.option');
    const correctIndex = quizData[currentCategory][currentQuestionIndex].correct;
    
    // Show correct and incorrect answers
    options.forEach(function(option, i) {
        if (i === correctIndex) {
            option.classList.add('correct');
        } else if (i === selectedAnswer && i !== correctIndex) {
            option.classList.add('incorrect');
        }
    });
    
    if (selectedAnswer === correctIndex) {
        score++;
    }
    
    document.getElementById('nextBtn').disabled = false;
}

// Function to move to next question
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= quizData[currentCategory].length) {
        showResults();
    } else {
        loadQuestion();
    }
}

// Function to start the timer
function startTimer() {
    clearInterval(timer);
    timer = setInterval(function() {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft + 's';
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            if (selectedAnswer === null) {
                selectAnswer(-1); // Auto-select as wrong
                setTimeout(function() {
                    document.getElementById('nextBtn').disabled = false;
                }, 1500);
            }
        }
    }, 1000);
}

// Function to show final results
function showResults() {
    totalTime = Math.round((Date.now() - startTime) / 1000);
    const percentage = Math.round((score / quizData[currentCategory].length) * 100);
    
    document.getElementById('scoreCircle').textContent = percentage + '%';
    document.getElementById('scoreText').textContent = 'You scored ' + score + ' out of ' + quizData[currentCategory].length;
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('incorrectAnswers').textContent = quizData[currentCategory].length - score;
    document.getElementById('timeTaken').textContent = totalTime + 's';
    
    // Set performance message
    let message = '';
    if (percentage >= 90) {
        message = 'Outstanding! You are a true expert! 🏆';
    } else if (percentage >= 80) {
        message = 'Excellent work! Great knowledge! 🌟';
    } else if (percentage >= 70) {
        message = 'Good job! Keep it up! 👍';
    } else if (percentage >= 60) {
        message = 'Not bad! Room for improvement! 📚';
    } else {
        message = 'Keep learning and try again! 💪';
    }
    
    document.getElementById('performanceMessage').textContent = message;
    
    saveProgress(currentCategory, score, quizData[currentCategory].length, percentage, totalTime);
    updateStats();
    showScreen('resultsScreen');
}

// Function to save progress to localStorage
function saveProgress(category, correct, total, percentage, time) {
    let progress = JSON.parse(localStorage.getItem('quizProgress') || '[]');
    
    progress.push({
        category: category,
        correct: correct,
        total: total,
        percentage: percentage,
        time: time,
        date: new Date().toLocaleDateString()
    });
    
    localStorage.setItem('quizProgress', JSON.stringify(progress));
}

// Function to load progress from localStorage
function loadProgress() {
    return JSON.parse(localStorage.getItem('quizProgress') || '[]');
}

// Function to update statistics on home screen
function updateStats() {
    const progress = loadProgress();
    
    document.getElementById('totalQuizzes').textContent = progress.length;
    
    if (progress.length > 0) {
        // Calculate average score
        const avgScore = Math.round(progress.reduce(function(sum, p) {
            return sum + p.percentage;
        }, 0) / progress.length);
        document.getElementById('averageScore').textContent = avgScore + '%';
        
        // Find best category
        const categoryStats = {};
        progress.forEach(function(p) {
            if (!categoryStats[p.category]) {
                categoryStats[p.category] = [];
            }
            categoryStats[p.category].push(p.percentage);
        });
        
        let bestCategory = '-';
        let bestAvg = 0;
        Object.keys(categoryStats).forEach(function(cat) {
            const avg = categoryStats[cat].reduce(function(a, b) {
                return a + b;
            }, 0) / categoryStats[cat].length;
            if (avg > bestAvg) {
                bestAvg = avg;
                bestCategory = cat.charAt(0).toUpperCase() + cat.slice(1);
            }
        });
        
        document.getElementById('bestCategory').textContent = bestCategory;
    }
}

// Function to show progress history
function showProgress() {
    const progress = loadProgress();
    const historyContainer = document.getElementById('progressHistory');
    
    if (progress.length === 0) {
        historyContainer.innerHTML = '<p style="text-align: center; color: #666; padding: 40px;">No quiz history yet. Take a quiz to see your progress!</p>';
    } else {
        let historyHTML = '';
        progress.reverse().forEach(function(p) {
            historyHTML += '<div class="stat-card" style="margin-bottom: 15px; text-align: left;">';
            historyHTML += '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">';
            historyHTML += '<strong style="color: #333;">' + p.category.charAt(0).toUpperCase() + p.category.slice(1) + '</strong>';
            historyHTML += '<span style="color: #666; font-size: 0.9rem;">' + p.date + '</span>';
            historyHTML += '</div>';
            historyHTML += '<div style="display: flex; justify-content: space-between; align-items: center;">';
            historyHTML += '<span style="color: #667eea; font-weight: bold; font-size: 1.2rem;">' + p.percentage + '%</span>';
            historyHTML += '<span style="color: #666; font-size: 0.9rem;">' + p.correct + '/' + p.total + ' • ' + p.time + 's</span>';
            historyHTML += '</div>';
            historyHTML += '</div>';
        });
        historyContainer.innerHTML = historyHTML;
    }
    
    showScreen('progressScreen');
}

// Function to clear progress history
function clearProgress() {
    if (confirm('Are you sure you want to clear all progress history?')) {
        localStorage.removeItem('quizProgress');
        updateStats();
        showProgress();
    }
}

// Function to go back to home screen
function goHome() {
    clearInterval(timer);
    showScreen('homeScreen');
}