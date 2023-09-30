


// Questions that will be asked
const Questions = [{
	q: "What is capital of India?",
	ans: "Delhi",
	a: [{ text: "Gandhinagar" },
	{ text: "Surat" },
	{ text: "Delhi"},
	{ text: "Mumbai" }
	]
},
{
	q: "What is the capital of Thailand?",
	ans: "Bangkok",
	a: [{ text: "Lampang"},
	{ text: "Phuket" },
	{ text: "Ayutthaya" },
	{ text: "Bangkok"}
	]

},
{
	q: "What is the capital of Gujarat",
	ans: "Gandhinagar",
	a: [{ text: "Surat" },
	{ text: "Vadodara" },
	{ text: "Gandhinagar"},
	{ text: "Rajkot" }
	]

}

];

let currQuestion = 0;
let score = 0;

let numQues =  Questions.length;
const progress = document.getElementById("progress");

function loadQues() {
	const ques = document.getElementById("question");
	ques.innerText = Questions[currQuestion].q;

	const btnLabel0 = document.getElementById("choice0");
	const btnLabel1 = document.getElementById("choice1");
	const btnLabel2 = document.getElementById("choice2");
	const btnLabel3 = document.getElementById("choice3");

	btnLabel0.innerHTML = Questions[currQuestion].a[0].text;
	//alert(Questions[currQuestion].a[0].text);
	btnLabel1.innerHTML = Questions[currQuestion].a[1].text;
	btnLabel2.innerHTML = Questions[currQuestion].a[2].text;
	btnLabel3.innerHTML = Questions[currQuestion].a[3].text;
	
	tmp = currQuestion + 1;
	progress.innerText="Question " + tmp +  " of " + numQues;


}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		const quiz = document.getElementById("quiz");
		quiz.hidden=true;
		loadScore();
	}
}

function checkAns(choicez) {
	const selectedAns = document.getElementById(choicez).innerHTML;

	if (selectedAns == Questions[currQuestion].ans) {		
		score++;
		console.log("Correct")
	}
	nextQuestion();

}
