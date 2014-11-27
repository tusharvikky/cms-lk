// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!!",
        "main":    "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p>Etiam scelerisque, nunc ac egestas consequat, odio nibh euismod nulla, eget auctor orci nibh vel nisi. Aliquam erat volutpat. Mauris vel neque sit amet nunc gravida congue sed sit amet purus.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Squareroot(X / 289) = 54/51, What is x?",
            "a": [
                {"option": "108",      "correct": false},
                {"option": "324",     "correct": true},
                {"option": "2916",      "correct": false},
                {"option": "6800",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>That's incorrect</span></p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": " x % of 250 + 25% of 68 = 67, find x.",
            "a": [
                {"option": "45", "correct": false},
                {"option": "10", "correct": false},
                {"option": "20", "correct": true},
                {"option": "25", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> </p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which is the biggest of the following fractions?",
            "a": [
                {"option": "3/4", "correct": false},
                {"option": "4/5", "correct": false},
                {"option": "5/6", "correct": false},
                {"option": "6/7", "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> </p>",
            "incorrect": "<p><span>Not Quite.</span></p>" // no comma here
        },
        { // Question 4
            "q": "If 5 poles are erected at equal distance between two points 20 meters apart. What is the distance between any two poles?",
            "a": [
                {"option": "2 meters",    "correct": false},
                {"option": "3 meters",     "correct": false},
                {"option": "4 meters",      "correct": false},
                {"option": "5 meters",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Sorry, that's wrong.</span></p>" // no comma here
        },
        { // Question 5
            "q": "A and B finish a job in 12 days, while A,B and C can finish it in 8 days, C alone will finish the job in",
            "a": [
                {"option": "14 days",    "correct": false},
				{"option": "16 days",    "correct": false},
				{"option": "20 days",    "correct": false},
                {"option": "24 days",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>ERRRR!</span></p>" // no comma here
        },
		{ // Question 6
            "q": "A trader lists his articles 20% above C.P and allows a discount of 10% as cash payment, his gain percent is",
            "a": [
                {"option": "5%",    "correct": false},
				{"option": "6%",     "correct": false},
                {"option": "8%",     "correct": true},
				{"option": "10%",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>SORRY!</span></p>" // no comma here
        },
		{ // Question 7
            "q": " What number must be added to the numbers 3,7 and 13, so that they are in continued proportion?",
            "a": [
                {"option": "5",    "correct": true},
                {"option": "6",     "correct": false},
				{"option": "8",     "correct": false},
				{"option": "9",     "correct": false}// no comma here
            ],
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>That's wrong!</span></p>" // no comma here
        },
		{ // Question 8
            "q": "12 buckets of water fill a tank when the capacity of each bucket is 13.5 liters. How many buckets will be needed to fill the same tank if the capacity of each bucket is 9 liters?",
            "a": [
                {"option": "8",    "correct": false},
				{"option": "16",    "correct": false},
                {"option": "18",     "correct": true},
				{"option": "none of these",    "correct": false}// no comma here
            ],
            "correct": "<p><span>Good Going!</span></p>",
            "incorrect": "<p><span>Ooopps!</span></p>" // no comma here
        },
		{ // Question 9
            "q": "If the area of an equilateral triangle is 36 √2 cm^2, the perimeter of the triangle is",
            "a": [
                {"option": "18cm",    "correct": false},
				{"option": "24cm",    "correct": false},
				{"option": "30cm",    "correct": false},
                {"option": "36cm",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Very good!</span> You must be very smart!</p>",
            "incorrect": "<p><span>I am sorry, that's wrong!</span></p>" // no comma here
        },
		{ // Question 10
            "q": "Which two digit number is equal to the area and perimeter of the square?",
            "a": [
                {"option": "14",    "correct": false},
				{"option": "16",    "correct": true},
				{"option": "18",    "correct": false},
                {"option": "20",     "correct": false} // no comma here
            ],
            "correct": "<p><span>Well done</span></p>",
            "incorrect": "<p><span>Ummm... that was wrong</span> </p>" // no comma here
        },
		{ // Question 11
            "q": " If the diameter of a cone is 14cm and its height is 9 cm, the area of its curved surface is",
            "a": [
                {"option": "198cm^2",    "correct": false},
				{"option": "212cm^2",    "correct": false},
				{"option": "222cm^2",    "correct": false},
                {"option": "250cm^2",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Keep going</span> You are doing quite good!</p>",
            "incorrect": "<p><span>Incorrect!</span></p>" // no comma here
        },
		{ // Question 12
            "q": "A number when divided by 119 leaves as remainder 19. If the same number is divided by 17, the remainder will be ",
            "a": [
                {"option": "19",    "correct": false},
				{"option": "10",    "correct": false},
				{"option": "7",    "correct": false},
                {"option": "2",     "correct": true} // no comma here
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>Sorry!</span></p>" // no comma here
        },
		{ // Question 13
            "q": "A fraction whose denominator is 30 and which lies between 5/8 and 7/11 is ",
            "a": [
                {"option": "17/30",    "correct": false},
                {"option": "19/30",     "correct": true},
                {"option": "13/30",      "correct": false},
                {"option": "23/30",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Sorry, that's wrong.</span></p>" // no comma here
        },
		{ // Question 14
            "q": "The profit earned by selling a watch for Rs.820 is as much as the loss incurred when it is sold for Rs.650. The cost price of the watch is ",
            "a": [
                {"option": "Rs.720",    "correct": false},
                {"option": "Rs.750",     "correct": false},
                {"option": "Rs.690",      "correct": false},
                {"option": "Rs.735",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Great!</span></p>",
            "incorrect": "<p><span>That's wrong.</span></p>" // no comma here
        },
		{ // Question 15
            "q": " If the sum doubles itself in 10 years at simple interest, what must be the rate percent per annum?",
            "a": [
                {"option": "5%",    "correct": false},
                {"option": "10%",     "correct": true},
                {"option": "20%",      "correct": false},
                {"option": "Data inadequate",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Good work!</span></p>",
            "incorrect": "<p><span>Sorry, that's incorrect.</span></p>" // no comma here
        },
		{ // Question 16
            "q": "The value of k for which (cosx + sinx) 2 + ksinxcosx – 1 =0 is an identity is",
            "a": [
                {"option": "-1",    "correct": false},
                {"option": "-2",     "correct": true},
                {"option": "0",      "correct": false},
                {"option": "1",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Wow!</span></p>",
            "incorrect": "<p><span>Ooops, that was wrong.</span></p>" // no comma here
        },
		{ // Question 17
            "q": " If tan A=1/2 and tan (2A+B) = 3, tanB is equal to",
            "a": [
                {"option": "1/4",    "correct": false},
                {"option": "1/3",     "correct": true},
                {"option": "-1/3",      "correct": false},
                {"option": "-1/4",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" // no comma here
        },
		{ // Question 18
            "q": "The value of cos10.cos20.cos30……cos1790 is equal to",
            "a": [
                {"option": "1/sqrt(2)",    "correct": false},
                {"option": "0",     "correct": true},
                {"option": "1",      "correct": false},
                {"option": "-1",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Better luck next time.</span></p>" // no comma here
        },
		{ // Question 19
            "q": " If A and B are two finite sets, then n(A) + n(B)  is equal to",
            "a": [
                {"option": "n(AUB)",    "correct": false},
                {"option": "n(AUB) – n(A∩ B)",     "correct": false},
                {"option": "n(AUB) + n(A∩ B)",      "correct": true},
                {"option": "n(A ∩ B)",   "correct": false} // no comma here
            ],
            "correct": "<p><span>Keep going like this!</span></p>",
            "incorrect": "<p><span>Sorry, you'll have to stop here.</span></p>" // no comma here
        },
		{ // Question 20
            "q": "The range of the relation R={(x,x^2): x is a prime number < 15} is",
            "a": [
                {"option": "(2,3,5,7)",    "correct": false},
                {"option": "(2,3,5,11)",     "correct": false},
                {"option": "(2,3,5,7,11,13)",      "correct": false},
                {"option": "(4,9,25,49,121,169)",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Very good!</span></p>",
            "incorrect": "<p><span>Hope you do better next time.</span></p>" // no comma here
        },
		{ // Question 21
            "q": "In an Arithmetic Progression, the 24th term is 100. Then the sum of the first 47 terms of the A.P is  ",
            "a": [
                {"option": "2300",    "correct": false},
                {"option": "2400",     "correct": false},
                {"option": "4600",      "correct": false},
                {"option": "4700",   "correct": true} // no comma here
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Sorry, that's wrong.</span></p>" // no comma here
        }
		
		
    ]
};
