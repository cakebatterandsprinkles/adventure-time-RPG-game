$(document).ready(function () {
    let userCharacter;
    let wins = 0;
    let losses = 0;
    let fighterIsSelected = false;
    let defenderIsSelected = false;
    let attackPoint = 0;
    let defendPoint = 0;
    let attackCharacter;
    let defendCharacter;
    let attackerHealth;
    let defenderHealth;

    $("#jakeImage").on("click", function () {
        userCharacter = $("#jakeImage");
        chooseCharacters();
    })

    $("#finnImage").on("click", function () {
        userCharacter = $("#finnImage");
        chooseCharacters();
    })

    $("#pbgImage").on("click", function () {
        userCharacter = $("#pbgImage");
        chooseCharacters();
    })

    $("#iceKingImage").on("click", function () {
        userCharacter = $("#iceKingImage");
        chooseCharacters();
    })

    $("#marcyImage").on("click", function () {
        userCharacter = $("#marcyImage");
        chooseCharacters();
    })

    $("#bmoImage").on("click", function () {
        userCharacter = $("#bmoImage");
        chooseCharacters();
    })

    $("#lspImage").on("click", function () {
        userCharacter = $("#lspImage");
        chooseCharacters();
    })

    $("#resetButton").on("click", function(){
        resetGame();
    })

    $("#attackButton").on("click", function(){
        createAttackPoint();
        attackerHealth -= defendPoint;
        $(".userCharacter .health").text(attackerHealth);
        defenderHealth -= attackPoint;
        $(".defender .health").text(defenderHealth);
        checkScore();

    })

    function chooseCharacters() {
        if (fighterIsSelected === false) {
            fighterIsSelected = true;
            addFirstCharacter();
        } else if (defenderIsSelected === false) {
            defenderIsSelected = true;
            addDefender();
        } 
    }

    function addFirstCharacter() {
        attackCharacter = $(userCharacter).detach();
        attackCharacter.appendTo(".userCharacter");
        attackerHealth = parseInt(attackCharacter.val());
    }

    function addDefender() {
        defendCharacter = $(userCharacter).detach();
        defendCharacter.appendTo(".defender");
        defenderHealth = parseInt(defendCharacter.val());
    }

    function resetGame() {
        fighterIsSelected = false;
        defenderIsSelected = false;
        wins = 0;
        $(".winsDisplay").text(wins);
        losses = 0;
        $(".lossesDisplay").text(losses);
        attackPoint = 0;
        defendPoint = 0;
    }

    function createAttackPoint() {
        attackPoint = Math.floor(Math.random()*15 + 5);
        defendPoint = Math.floor(Math.random()*15 + 5);
        if (attackPoint == defendPoint) {
            createAttackPoint();
        } else {
            console.log (attackPoint);
            console.log (defendPoint);
            console.log ("_____________")
        }
    }

    $('.userCharacter .health').text(attackerHealth);

    function checkScore() {
        if (attackerHealth > 0 &&  defenderHealth <= 0) {
            wins++;
            $(".winsDisplay").text(wins);
            checkWin();
        } else if (defenderHealth > 0 && attackerHealth <= 0){
            losses++;
            $(".lossesDisplay").text(losses);
            checkWin();
        }
    }

    

    function checkWin() {
        if (wins === 10 && losses < 10) {
            alert("You won!");
            resetGame();
        } else if (wins < 10 && losses === 10) {
            alert("You lost!");
            resetGame();
        }
    }
});