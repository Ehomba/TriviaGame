//needed variables
var answeredCorrect = 0;
var answeredIncorrect = 0;
var notAnswered = 0;
var questionSelected = false;
var intervalId;
var clockRunning = false;


//Question object orientation
function Question ( question, ans1, ans2, ans3, ans4, correctAns ) {
    this.question = question
    this.ans1 = ans1
    this.ans2 = ans2    
    this.ans3 = ans3
    this.ans4 = ans4
    this.correctAns = correctAns
    }

//questions
var question1 = new Question ('Who is the leader of the Morloks?', 'Morph', 'Callisto', 'Magneto', 'Leech', 'Callisto');
var question2 = new Question ("What is the name of the mutant drug Quentin Quire uses to enhance his powers while leader of the Omega Gang?", "Kick", "Punch", "Squirm", "Huff", "Kick");
var question3 = new Question ("Who did Rogue permantly absorb powers from to get her Super-Strength and Flight?", "Captain Britain", "Sheriff No-Good", "Doctor Nemesis", "Ms.Marvel", "Ms.Marvel");
// help

//stopwatch

var stopwatch = {

    time: 5,

reset: function() {

    stopwatch.time = 4;
    $("#display").text("00:04");
    console.log('hello')
},
start: function() {

    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
},
stop: function() {
    stopwatch.time = 4;
    $("#display").text("00:04");  
    if($("display").text() === "00:00") {
        clearInterval(intervalId);
        clockRunning = false;
        console.log("hello")  
    }
    // DONE: Use clearInterval to stop the count here and set the clock to not be running.
  },
count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
    if(converted === "00:00") {
        f2();       
    }
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;  
    }

    return minutes + ":" + seconds;
  }
};

//hide answers on document load
$(document).ready(
    $("#answers").hide(),
    $("#display").hide(),
)

//Start game and load first questions
$("#Start").click(function() {
    //hide start, show answers
    $('#Start').hide();
    $('#answers').show();
    $("#display").show();
    //change var questionSelected
    questionSelected = question1
    //push answers to document
    document.getElementById("question").innerHTML = questionSelected.question
    document.getElementById("answer1").innerHTML = questionSelected.ans1
    document.getElementById("answer2").innerHTML = questionSelected.ans2
    document.getElementById("answer3").innerHTML = questionSelected.ans3
    document.getElementById("answer4").innerHTML = questionSelected.ans4
    //change values of answer
    $("#answer1").val(questionSelected.ans1)
    $("#answer2").val(questionSelected.ans2)
    $("#answer3").val(questionSelected.ans3)
    $("#answer4").val(questionSelected.ans4)
});
$("#Start").on("click", stopwatch.start);

//what happens when you answer a question
function f1(objButton){  
    var finalAnswer = objButton.value
    if (finalAnswer === questionSelected.correctAns) {
        console.log("Correct")

    } else {
        console.log("Wrong")
    };
    if (questionSelected === question1){
    questionSelected = question2
    //push answers to document
    document.getElementById("question").innerHTML = questionSelected.question;
    document.getElementById("answer1").innerHTML = questionSelected.ans1;
    document.getElementById("answer2").innerHTML = questionSelected.ans2;
    document.getElementById("answer3").innerHTML = questionSelected.ans3;
    document.getElementById("answer4").innerHTML = questionSelected.ans4;
    //change values of answer
    $("#answer1").val(questionSelected.ans1);
    $("#answer2").val(questionSelected.ans2);
    $("#answer3").val(questionSelected.ans3);
    $("#answer4").val(questionSelected.ans4);
    stopwatch.reset();
    }
    else if (questionSelected === question2) {
    questionSelected = question3;
    //push answers to document
    document.getElementById("question").innerHTML = questionSelected.question;
    document.getElementById("answer1").innerHTML = questionSelected.ans1;
    document.getElementById("answer2").innerHTML = questionSelected.ans2;
    document.getElementById("answer3").innerHTML = questionSelected.ans3;
    document.getElementById("answer4").innerHTML = questionSelected.ans4;
    //change values of answer
    $("#answer1").val(questionSelected.ans1)
    $("#answer2").val(questionSelected.ans2)
    $("#answer3").val(questionSelected.ans3)
    $("#answer4").val(questionSelected.ans4)
    stopwatch.stop();
    }
}

function f2(){
    if (questionSelected === question1){
        questionSelected = question2
        //push answers to document
        document.getElementById("question").innerHTML = questionSelected.question
        document.getElementById("answer1").innerHTML = questionSelected.ans1
        document.getElementById("answer2").innerHTML = questionSelected.ans2
        document.getElementById("answer3").innerHTML = questionSelected.ans3
        document.getElementById("answer4").innerHTML = questionSelected.ans4
        //change values of answer
        $("#answer1").val(questionSelected.ans1)
        $("#answer2").val(questionSelected.ans2)
        $("#answer3").val(questionSelected.ans3)
        $("#answer4").val(questionSelected.ans4)
        console.log(stopwatch.reset)
        stopwatch.reset();
        }
    else if (questionSelected === question2) {
        questionSelected = question3
        //push answers to document
        document.getElementById("question").innerHTML = questionSelected.question
        document.getElementById("answer1").innerHTML = questionSelected.ans1
        document.getElementById("answer2").innerHTML = questionSelected.ans2
        document.getElementById("answer3").innerHTML = questionSelected.ans3
        document.getElementById("answer4").innerHTML = questionSelected.ans4
        //change values of answer
        $("#answer1").val(questionSelected.ans1)
        $("#answer2").val(questionSelected.ans2)
        $("#answer3").val(questionSelected.ans3)
        $("#answer4").val(questionSelected.ans4)
        stopwatch.stop();
        }
}
