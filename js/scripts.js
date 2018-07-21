// Business Logic 
function Player(userName) {
    this.userName = userName;
    this.score = 0;
};

function Turn(player) {
    this.total = 0;
    this.randNumber = 0;
    this.player = player;
};
Turn.prototype.diceRoller = function(player1, player2) {
    var randNumber = Math.floor(Math.random() *6) + 1;
    this.total += randNumber;
    
    if(randNumber == 1) {
        alert("Your turn is over, other player's turn.")
        this.total = 0;
        this.endTurn( player1, player2);
        return randNumber;
    }
    else {
        this.score += total;
        return randNumber;
    };
};

//user interface logic
$(document).ready(function(){
 var player1 = new Player("Player 1");
 var player2 = new Player("Player 2");
 var currentTurn = new Turn(player1);
 var total = currentTurn.total;

    $("#player1").hide().show("slow");
    $("#player2").hide().show("slow");
    $("h1").hide().show("slow");
    $("p").hide().show("slow");


    $("#roll-total").text(total);

    $('#player1-score').text(player1.score);
    $('#player2-score').text(player2.score);


    $('#current_player').text(currentTurn.player.userName);

    $("form#roll").submit(function(event) {
     event.preventDefault();
    
    var result = currentTurn.diceRoller(player1, player2);


    $('#roll').text(result);

   
    $('#roll-total').text(currentTurn.total);

if ((currentTurn.total + currentTurn.player.score) >= 100) {
    if (currentTurn.player == player1) {
        $('#player1-score').text(currentTurn.total + currentTurn.player.score);
        alert("CONGRATS!");
    } 
    else if (currentTurn.player == player2) {
        $('#player2-score').text(currentTurn.total + currentTurn.player.score)
        alert("CONGRATS");
    };
    };
});

    $("form#end-turn").submit(function(event) {
      event.preventDefault();
      currentTurn.endTurn(player1, player2);
    $('#current_player').text(currentTurn.player.userName);

    $('#player1-score').text(player1.score);
    $('#player2-score').text(player2.score);


    $('#roll').text(currentTurn.randNumber);
    $('#roll-total').text(currentTurn.total);
   });
   Turn.prototype.endTurn = function(player1,player2) {
    this.total = 0;
    this.randNumber = 0;
    if (this.player == player1) {
        this.player == player2;
        $("#player2").toggleClass("active");
        $("#player1").toggleClass("active");
    }
    else if (this.player == player2) {
       this.player == player2;
    $("#player2").toggleClass("active");
    $("#player1").toggleClass("active");
    };    
   };
});
