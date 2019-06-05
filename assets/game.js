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

    $("#changeCharactersButton").on("click", function(){
        changeCharacters();
        fighterIsSelected = false;
        defenderIsSelected = false;
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
        changeCharacters();
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
            attackerHealth = parseInt(attackCharacter.val());
            $(".userCharacter .health").text(attackerHealth);
            defenderHealth = parseInt(defendCharacter.val());
            $(".defender .health").text(defenderHealth);
            alert ("You are lumpin' awesome!")
            checkWin();
        } else if (defenderHealth > 0 && attackerHealth <= 0){
            losses++;
            $(".lossesDisplay").text(losses);
            attackerHealth = parseInt(attackCharacter.val());
            $(".userCharacter .health").text(attackerHealth);
            defenderHealth = parseInt(defendCharacter.val());
            $(".defender .health").text(defenderHealth);
            alert ("No bad vibes! Keep on.")
            checkWin();
        }
    }

    function changeCharacters() {
        defenderHealth = parseInt(defendCharacter.val());
        $(".defender .health").text(defenderHealth);
        defendCharacter.appendTo(".characters");
        attackerHealth = parseInt(attackCharacter.val());
        $(".userCharacter .health").text(attackerHealth);
        attackCharacter.appendTo(".characters");

    }

    function checkWin() {
        if (wins === 10 && losses < 10) {
            alert("Congrats! You know, that if your parents could see you now, they'd be jealous of how lumpin' awesome you are.");
            resetGame();
        } else if (wins < 10 && losses === 10) {
            alert("You lost! But you know, if you get everything you want the minute you want it, what's the point of living?");
            resetGame();
        }
    }
});