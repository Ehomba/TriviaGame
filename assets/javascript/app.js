//needed variables
var answeredCorrect = 0;
var answeredIncorrect = 0;
var notAnswered = 0;
var questionSelected = false;
var intervalId;
var clockRunning = false;
var index = 0;
var imageArray = [
    '<img src="smiley.gif" alt="Smiley face" height="42" width="42">',
    '<img src="assets/images/X-Men1.png">',
    '<img src="assets/images/xmen2.jpg">',
    '<img src="assets/images/xmen3.jpg">',
    '<img src="assets/images/xmen5.jpg">',
    '<img src="assets/images/xmen6.jpg">',
    '<img src="assets/images/xmen9.jpg">',
    '<img src="assets/images/xmen8.jpg">',
]

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
var question4 = new Question ("What is name of the metal bonded to Wolverine's bones?", "Alloymantium", "Vibranium", "Adamantium", "Iron", "Adamantium")
var question5 = new Question (" Which of these X-Men DOESN'T have blue skin or fur?", "Beast", "Nightcrawler", "Armor", "Mystique", "Armor")
var question6 = new Question ("Who is the father of Quicksilver and Scarlet Witch?", "Magneto", "Bob Ross", "Xavier", "Cyclops", "Magneto")
var question7 = new Question ("Which of these characters is not a mutant?", "Magneto", "Professor X", "Juggernaut", "Phoenix", "Juggernaut")
var question8 = new Question ("Who is the sentinel sent from the future to destroy the X-Men?", "Sentinel-X", "Nimrod", "Cable", "Bishop", "Nimrod")
// help

//stopwatch

var stopwatch = {

    time: 30,

reset: function() {

    stopwatch.time = 30;
    $("#display").text("00:30");
    stopwatch.start();  
},
start: function() {

    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
},
stop: function() {

    // stopwatch.time = 4;
    // $("#display").text("00:04"); 
   
    // if($("display").text() === "00:00") {
        clearInterval(intervalId);
        clockRunning = false;
    //     console.log("hello")  
    // }
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
    if(stopwatch.time === 0 && index === 8) {
          stopwatch.stop()
          notAnswered++
          $("#answers").hide(),
          $("#display").hide(),
          $('#question').html(`<div> correct ${answeredCorrect}</div><div> incorrect : ${answeredIncorrect}</div><div> Not Answered : ${notAnswered}</div>`);  
    } else if( stopwatch.time === 0 ) {
          notAnswered++
          $("#answers").hide(),
          $("#display").hide(),
          stopwatch.stop() 
          $('#question').html(imageArray[index]);
        setTimeout(function(){
            f2();
        }, 4000)
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
    index++;
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

    stopwatch.start();
});


//what happens when you answer a question
function f1(objButton){  
    $('#question').html(imageArray[index]);
    $("#answers").hide(),
    $("#display").hide(),
    stopwatch.stop();
    setTimeout(function(){
    $('#answers').show();
    $("#display").show();
    var finalAnswer = objButton.value
    if (finalAnswer === questionSelected.correctAns) {
        answeredCorrect++

    } else {
        answeredIncorrect++
    };
   
    if (questionSelected === question1){
    questionSelected = question2
    index++
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
    index++    
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
    stopwatch.reset();
    }
    else if (questionSelected === question3) {
        index++    
        questionSelected = question4;
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
        stopwatch.reset();
        }
        else if (questionSelected === question4) {
            index++    
            questionSelected = question5;
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
            stopwatch.reset();
            }
            else if (questionSelected === question5) {
                index++    
                questionSelected = question6;
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
                stopwatch.reset();
                }
                else if (questionSelected === question6) {
                    index++    
                    questionSelected = question7;
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
                    stopwatch.reset();
                    }
                    else if (questionSelected === question7) {
                        index++    
                        questionSelected = question8;
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
                        stopwatch.reset();
                        }
                        else if (questionSelected === question8){
                            stopwatch.stop()
                            $("#answers").hide(),
                            $("#display").hide(),
                            $('#question').html(`<div> correct ${answeredCorrect}</div><div> incorrect : ${answeredIncorrect}</div><div> Not Answered : ${notAnswered}</div>`); 
                        }
}, 4000)
}

function f2(){
    $('#answers').show();
    $("#display").show();
    if (questionSelected === question1){
        index++
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
        index++
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
        stopwatch.reset();
        }
        else if (questionSelected === question3) {
            index++    
            questionSelected = question4;
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
            stopwatch.reset();
            }
            else if (questionSelected === question4) {
                index++   
                questionSelected = question5;
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
                stopwatch.reset();
                }
                else if (questionSelected === question5) {
                    index++  
                    questionSelected = question6;
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
                    stopwatch.reset();
                    }
                    else if (questionSelected === question6) {
                        index++   
                        questionSelected = question7;
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
                        stopwatch.reset();
                        }
                        else if (questionSelected === question7) {
                            index++   
                            questionSelected = question8;
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
                            stopwatch.reset();
                            }
}
