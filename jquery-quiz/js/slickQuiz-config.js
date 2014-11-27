// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Test Your Knowledge!! - CMS Lucknow",
        "main":    "<p>Think you're smart enough to be on Jeopardy? Find out with this super crazy knowledge quiz!</p>",
        "results": "<h5>Learn More</h5><p> No Hard feelingss Dear, It's just a Game, better Luck Next Time.</p>",
        "level1":  "Jeopardy Ready",
        "level2":  "Jeopardy Contender",
        "level3":  "Jeopardy Amateur",
        "level4":  "Jeopardy Newb",
        "level5":  "Stay in school, kid..." 
    },
    "questions": [
        { // Question 2
            "q": "Squareroot(X / 289) = 54/51, What is x?",
            "a": [
                {"option": "108",      "correct": false},
                {"option": "324",     "correct": true},
                {"option": "2916",      "correct": false},
                {"option": "6800",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>That's incorrect</span></p>" 
        },
        { // Question 2
            "q": " x % of 250 + 25% of 68 = 67, find x.",
            "a": [
                {"option": "45", "correct": false},
                {"option": "10", "correct": false},
                {"option": "20", "correct": true},
                {"option": "25", "correct": false} 
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> </p>",
            "incorrect": "<p><span>Hmmm.</span> You might want to reconsider your options.</p>" 
        },
        { // Question 3
            "q": "Which is the biggest of the following fractions?",
            "a": [
                {"option": "3/4", "correct": false},
                {"option": "4/5", "correct": false},
                {"option": "5/6", "correct": false},
                {"option": "6/7", "correct": true} 
            ],
            "correct": "<p><span>Brilliant!</span> </p>",
            "incorrect": "<p><span>Not Quite.</span></p>" 
        },
        { // Question 4
            "q": "If 5 poles are erected at equal distance between two points 20 meters apart. What is the distance between any two poles?",
            "a": [
                {"option": "2 meters",    "correct": false},
                {"option": "3 meters",     "correct": false},
                {"option": "4 meters",      "correct": false},
                {"option": "5 meters",   "correct": true} 
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Sorry, that's wrong.</span></p>" 
        },
        { // Question 5
            "q": "A and B finish a job in 12 days, while A,B and C can finish it in 8 days, C alone will finish the job in",
            "a": [
                {"option": "14 days",    "correct": false},
				{"option": "16 days",    "correct": false},
				{"option": "20 days",    "correct": false},
                {"option": "24 days",     "correct": true} 
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>ERRRR!</span></p>" 
        },
		{ // Question 6
            "q": "A trader lists his articles 20% above C.P and allows a discount of 10% as cash payment, his gain percent is",
            "a": [
                {"option": "5%",    "correct": false},
				{"option": "6%",     "correct": false},
                {"option": "8%",     "correct": true},
				{"option": "10%",     "correct": false}
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>SORRY!</span></p>" 
        },
		{ // Question 7
            "q": " What number must be added to the numbers 3,7 and 13, so that they are in continued proportion?",
            "a": [
                {"option": "5",    "correct": true},
                {"option": "6",     "correct": false},
				{"option": "8",     "correct": false},
				{"option": "9",     "correct": false}
            ],
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>That's wrong!</span></p>" 
        },
		{ // Question 8
            "q": "12 buckets of water fill a tank when the capacity of each bucket is 13.5 liters. How many buckets will be needed to fill the same tank if the capacity of each bucket is 9 liters?",
            "a": [
                {"option": "8",    "correct": false},
				{"option": "16",    "correct": false},
                {"option": "18",     "correct": true},
				{"option": "none of these",    "correct": false}
            ],
            "correct": "<p><span>Good Going!</span></p>",
            "incorrect": "<p><span>Ooopps!</span></p>" 
        },
		{ // Question 9
            "q": "If the area of an equilateral triangle is 36 √2 cm^2, the perimeter of the triangle is",
            "a": [
                {"option": "18cm",    "correct": false},
				{"option": "24cm",    "correct": false},
				{"option": "30cm",    "correct": false},
                {"option": "36cm",     "correct": true} 
            ],
            "correct": "<p><span>Very good!</span> You must be very smart!</p>",
            "incorrect": "<p><span>I am sorry, that's wrong!</span></p>" 
        },
		{ // Question 10
            "q": "Which two digit number is equal to the area and perimeter of the square?",
            "a": [
                {"option": "14",    "correct": false},
				{"option": "16",    "correct": true},
				{"option": "18",    "correct": false},
                {"option": "20",     "correct": false} 
            ],
            "correct": "<p><span>Well done</span></p>",
            "incorrect": "<p><span>Ummm... that was wrong</span> </p>" 
        },
		{ // Question 11
            "q": " If the diameter of a cone is 14cm and its height is 9 cm, the area of its curved surface is",
            "a": [
                {"option": "198cm^2",    "correct": false},
				{"option": "212cm^2",    "correct": false},
				{"option": "222cm^2",    "correct": false},
                {"option": "250cm^2",     "correct": true} 
            ],
            "correct": "<p><span>Keep going</span> You are doing quite good!</p>",
            "incorrect": "<p><span>Incorrect!</span></p>" 
        },
		{ // Question 12
            "q": "A number when divided by 119 leaves as remainder 19. If the same number is divided by 17, the remainder will be ",
            "a": [
                {"option": "19",    "correct": false},
				{"option": "10",    "correct": false},
				{"option": "7",    "correct": false},
                {"option": "2",     "correct": true} 
            ],
            "correct": "<p><span>Good Job!</span></p>",
            "incorrect": "<p><span>Sorry!</span></p>" 
        },
		{ // Question 13
            "q": "A fraction whose denominator is 30 and which lies between 5/8 and 7/11 is ",
            "a": [
                {"option": "17/30",    "correct": false},
                {"option": "19/30",     "correct": true},
                {"option": "13/30",      "correct": false},
                {"option": "23/30",   "correct": false} 
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Sorry, that's wrong.</span></p>" 
        },
		{ // Question 14
            "q": "The profit earned by selling a watch for Rs.820 is as much as the loss incurred when it is sold for Rs.650. The cost price of the watch is ",
            "a": [
                {"option": "Rs.720",    "correct": false},
                {"option": "Rs.750",     "correct": false},
                {"option": "Rs.690",      "correct": false},
                {"option": "Rs.735",   "correct": true} 
            ],
            "correct": "<p><span>Great!</span></p>",
            "incorrect": "<p><span>That's wrong.</span></p>" 
        },
		{ // Question 15
            "q": " If the sum doubles itself in 10 years at simple interest, what must be the rate percent per annum?",
            "a": [
                {"option": "5%",    "correct": false},
                {"option": "10%",     "correct": true},
                {"option": "20%",      "correct": false},
                {"option": "Data inadequate",   "correct": false} 
            ],
            "correct": "<p><span>Good work!</span></p>",
            "incorrect": "<p><span>Sorry, that's incorrect.</span></p>" 
        },
		{ // Question 16
            "q": "The value of k for which (cosx + sinx) 2 + ksinxcosx – 1 =0 is an identity is",
            "a": [
                {"option": "-1",    "correct": false},
                {"option": "-2",     "correct": true},
                {"option": "0",      "correct": false},
                {"option": "1",   "correct": false} 
            ],
            "correct": "<p><span>Wow!</span></p>",
            "incorrect": "<p><span>Ooops, that was wrong.</span></p>" 
        },
		{ // Question 17
            "q": " If tan A=1/2 and tan (2A+B) = 3, tanB is equal to",
            "a": [
                {"option": "1/4",    "correct": false},
                {"option": "1/3",     "correct": true},
                {"option": "-1/3",      "correct": false},
                {"option": "-1/4",   "correct": false} 
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Incorrect.</span></p>" 
        },
		{ // Question 18
            "q": "The value of cos10.cos20.cos30……cos1790 is equal to",
            "a": [
                {"option": "1/sqrt(2)",    "correct": false},
                {"option": "0",     "correct": true},
                {"option": "1",      "correct": false},
                {"option": "-1",   "correct": false} 
            ],
            "correct": "<p><span>Nice!</span></p>",
            "incorrect": "<p><span>Better luck next time.</span></p>" 
        },
		{ // Question 19
            "q": " If A and B are two finite sets, then n(A) + n(B)  is equal to",
            "a": [
                {"option": "n(AUB)",    "correct": false},
                {"option": "n(AUB) – n(A∩ B)",     "correct": false},
                {"option": "n(AUB) + n(A∩ B)",      "correct": true},
                {"option": "n(A ∩ B)",   "correct": false} 
            ],
            "correct": "<p><span>Keep going like this!</span></p>",
            "incorrect": "<p><span>Sorry, you'll have to stop here.</span></p>" 
        },
		{ // Question 20
            "q": "The range of the relation R={(x,x^2): x is a prime number < 15} is",
            "a": [
                {"option": "(2,3,5,7)",    "correct": false},
                {"option": "(2,3,5,11)",     "correct": false},
                {"option": "(2,3,5,7,11,13)",      "correct": false},
                {"option": "(4,9,25,49,121,169)",   "correct": true} 
            ],
            "correct": "<p><span>Very good!</span></p>",
            "incorrect": "<p><span>Hope you do better next time.</span></p>" 
        },
		{ // Question 21
            "q": "In an Arithmetic Progression, the 24th term is 100. Then the sum of the first 47 terms of the A.P is  ",
            "a": [
                {"option": "2300",    "correct": false},
                {"option": "2400",     "correct": false},
                {"option": "4600",      "correct": false},
                {"option": "4700",   "correct": true} 
            ],
            "correct": "<p><span>Awesome!</span></p>",
            "incorrect": "<p><span>Sorry, that's wrong.</span></p>" 
        },




        { // Question 26
            "q": "If _______ =12/7, then n is",
            "a": [
                {"option": "6",      "correct": true},
                {"option": "4",     "correct": false},
                {"option": "7",      "correct": false},
                {"option": "5",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 27
            "q": "If a1=a2=2, an=an-1(n>2), then a5 is",
            "a": [
                {"option": "0",      "correct": false},
                {"option": "-12",     "correct": false},
                {"option": "-1",      "correct": true},
                {"option": "1",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 28
            "q": "P and Q are points on the joining A (-2,5) and B(3,1) such that AP=PQ=QB. Then the midpoint of PQ is",
            "a": [
                {"option": "(1/2, 3)",      "correct": true},
                {"option": "(-1/2,4)",     "correct": false},
                {"option": "(2,3)",      "correct": false},
                {"option": "(1,4)",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 29
            "q": "If (3, 4) is extremity of a diameter of a circle with centre (1, 2) the other extremity of the diameter is",
            "a": [
                {"option": "(-3, 4)",      "correct": false},
                {"option": "(4, 3)",     "correct": false},
                {"option": "(-1, 0)",      "correct": true},
                {"option": "(4, 6)",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 30
            "q": "The straight line 3x+y=9 divides the segment joining the points (1, 3) and (2, 7) in the ratio",
            "a": [
                {"option": "4:2",      "correct": false},
                {"option": "3:4",     "correct": true},
                {"option": "4:5",      "correct": false},
                {"option": "5:6",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 31
            "q": "The distance of the point (x, y) from the y axis is",
            "a": [
                {"option": "x",      "correct": false},
                {"option": "y",     "correct": false},
                {"option": "|x|",      "correct": true},
                {"option": "|y|",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 32
            "q": "(k,-2), (0,3k), (-k/2, k/2) are the vertices of a triangle. If the abscissa of it’s centroid is equal to the ordinate, then the value of k is",
            "a": [
                {"option": "-2",      "correct": false},
                {"option": "2/3",     "correct": true},
                {"option": "3",      "correct": false},
                {"option": "-3",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 33
            "q": "Find out the wrong number in the following sequence of numbers 4,13,17,26,30,38,43",
            "a": [
                {"option": "13",      "correct": false},
                {"option": "26",     "correct": false},
                {"option": "38",      "correct": true},
                {"option": "43",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 34
            "q": "The length of the diagonal of a square is 4√2 cms. Its area is",
            "a": [
                {"option": "32 cm2",      "correct": false},
                {"option": "8 cm2",     "correct": false},
                {"option": "16 cm2",      "correct": true},
                {"option": "36 cm2",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 35
            "q": "35. What decimal fraction is 20mm of a metre?",
            "a": [
                {"option": "0.2",      "correct": false},
                {"option": "0.05",     "correct": false},
                {"option": "0.02",      "correct": true},
                {"option": "0.002",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 36
            "q": "( ) =?",
            "a": [
                {"option": "0.32",      "correct": false},
                {"option": "1",     "correct": false},
                {"option": "0.72",      "correct": true},
                {"option": "0.26",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 37
            "q": "3.57 in fractional form",
            "a": [
                {"option": "357/99",      "correct": false},
                {"option": "357/90",     "correct": false},
                {"option": "345/99",      "correct": true},
                {"option": "354/90",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 38
            "q": "√1008/√7 = ?",
            "a": [
                {"option": "12.75",      "correct": false},
                {"option": "11.68",     "correct": false},
                {"option": "12",      "correct": true},
                {"option": "13.26",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 39
            "q": "The surface area of a cube is 216 cm2. What is its volume?",
            "a": [
                {"option": "1296 cm3",      "correct": false},
                {"option": "648 cm3",     "correct": false},
                {"option": "216 cm3",      "correct": true},
                {"option": "864 cm3",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 40
            "q": "If x/2y = 3/2, then the value of (2x+y)/(x-2y) equals",
            "a": [
                {"option": "1/7",      "correct": false},
                {"option": "7.1",     "correct": false},
                {"option": "7",      "correct": true},
                {"option": "6.8",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 41
            "q": "If a=1.2, b=2.1 and c=-3.3, then the value of a3+b3+c3-3abc is",
            "a": [
                {"option": "1",      "correct": false},
                {"option": "2",     "correct": false},
                {"option": "0",      "correct": true},
                {"option": "3",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 42
            "q": "I wrote all the numbers from 0 to 999.Which digit did I write less than others?",
            "a": [
                {"option": "9",      "correct": false},
                {"option": "1",     "correct": false},
                {"option": "0",      "correct": true},
                {"option": "5",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 43
            "q": "If A and B are perfect cubes, which will not necessarily be a perfect cube?",
            "a": [
                {"option": "27B",      "correct": false},
                {"option": "AB",     "correct": false},
                {"option": "AB+27",      "correct": true},
                {"option": "A-B",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 44
            "q": "What is the average of all positive integers less than 100 that are multiples of 7?",
            "a": [
                {"option": "57",      "correct": false},
                {"option": "50",     "correct": false},
                {"option": "52.5",      "correct": true},
                {"option": "57.2",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 45
            "q": "‘f’ is a function such that f(x) <0. The graph of the new function ‘g’ defined by g(x) = |f(x)| is a reflection of the graph...",
            "a": [
                {"option": "On the x-axis",      "correct": false},
                {"option": "On the y-axis",     "correct": false},
                {"option": "On the line y=x",      "correct": true},
                {"option": "On the line y=(-x)",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 46
            "q": "A school committee consists of 2 teachers and 4 students. The number of committees that can be formed from 5 teachers and 10 students is?",
            "a": [
                {"option": "10",      "correct": false},
                {"option": "15",     "correct": false},
                {"option": "2100",      "correct": true},
                {"option": "2500",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 47
            "q": "If f(x) is an odd function, then |f(x)| is...",
            "a": [
                {"option": "An odd function",      "correct": false},
                {"option": "An even function",     "correct": false},
                {"option": "Neither odd nor even",      "correct": true},
                {"option": "Even and odd",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 48
            "q": "a+b=10 b=?",
            "a": [
                {"option": "5",      "correct": false},
                {"option": "6",     "correct": false},
                {"option": "8",      "correct": true},
                {"option": "7",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 49
            "q": "11: 1210:: 8:?",
            "a": [
                {"option": "216",      "correct": false},
                {"option": "1029",     "correct": false},
                {"option": "448",      "correct": true},
                {"option": "729",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 50
            "q": "12: 144:: 20: ?",
            "a": [
                {"option": "464",      "correct": false},
                {"option": "135",     "correct": false},
                {"option": "400",      "correct": true},
                {"option": "729",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 51
            "q": "For my anniversary, I decided to surprise my wife. Since she is a voracious reader, I decided to collect a lot of books for her. On the first day of the month, I bought one book, on the second, I bought two and on the third, I bought three. This process went on till the anniversary and on the day, I had 276 books with me to gift her.Calculate, on which day is our anniversary?",
            "a": [
                {"option": "8",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "23",      "correct": true},
                {"option": "23",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 52
            "q": "The average of first 50 natural numbers is .....",
            "a": [
                {"option": "25.30",      "correct": false},
                {"option": "25.00",     "correct": false},
                {"option": "25.5",      "correct": true},
                {"option": "12.25",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 53
            "q": "A clock strikes once at 1 o’clock, twice at 2 o’clock, thrice at 3 o’clock and so on. How many times will it strike in 24 hours?",
            "a": [
                {"option": "78",      "correct": false},
                {"option": "136",     "correct": false},
                {"option": "156",      "correct": true},
                {"option": "196",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        },
        { // Question 54
            "q": "54. 106 × 106 – 94 × 94 =?",
            "a": [
                {"option": "2004",      "correct": false},
                {"option": "1904",     "correct": false},
                {"option": "2400",      "correct": true},
                {"option": "1906",     "correct": false} 
            ],
            "correct": "<p><span>That's right!</span></p>",
            "incorrect": "<p><span>Uhh no.</span></p>" 
        }
		
		
    ]
};
