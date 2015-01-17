$(function(){
  "use strict";
  var HAND_TYPE = [ "rock" , "scissors" , "paper" ];
  var RESULT_CODE = { DRAW : 0, WIN : 1, LOSE : 2, };
  var RESULT_MESSAGE = [ "draw.","You win!","You lose!" ];
  var RESULT_SUMMARY = { DRAW : 0, WIN : 0, LOSE : 0, };

  $(".rsp-btn").click(function(){
    var opponentHand = bobHand();
    var result = judge( $(this).attr("id"), opponentHand);

    $("#myrspimg").attr("src", "img/" + $(this).attr("id") + ".png");
    $("#bobrspimg").attr("src", "img/" + opponentHand + ".png");
    $("#result").text(RESULT_MESSAGE[result]);
  });

 $("#display-or-not").click(function(){
    $(".specification").toggle({
        complete: function(){
                if ($("#display-or-not").text() === "非表示"){
                        $("#display-or-not").text("表示");
                }
                else {
                    $("#display-or-not").text("非表示");
                }
            }
        });
  });

  function bobHand() {
    return HAND_TYPE[ Math.floor(Math.random() * 3) ];
  }
  function displayResultSummary(){
    $(".result-summary").text(
    "戦績サマリー:"+RESULT_SUMMARY.WIN+"勝"+RESULT_SUMMARY.LOSE+"敗"+RESULT_SUMMARY.DRAW+"分け");
  }

  function judge(myHand, opponentHand) {
    var result;
    if (myHand === opponentHand) {
      result = RESULT_CODE.DRAW;
      RESULT_SUMMARY.DRAW += 1;
    } else if ((myHand === HAND_TYPE[0] && opponentHand === HAND_TYPE[1]) ||
               (myHand === HAND_TYPE[1] && opponentHand === HAND_TYPE[2]) || 
               (myHand === HAND_TYPE[2] && opponentHand === HAND_TYPE[0])) {
      result = RESULT_CODE.WIN;
      RESULT_SUMMARY.WIN += 1;

    }else {
      result = RESULT_CODE.LOSE;
      RESULT_SUMMARY.LOSE += 1 ;
    }
    displayResultSummary();
    return result;
  }
});
