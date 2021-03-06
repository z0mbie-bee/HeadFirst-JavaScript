var scores = [60, 50, 60, 58, 54, 54,
            58, 50, 52, 54, 48, 69,
            34, 55, 51, 52, 44, 51,
            69, 64, 66, 55, 52, 61,
            46, 31, 57, 52, 44, 18,
            41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25,
            .33, .31, .25, .29, .27, .22,
            .31, .25, .25, .33, .21, .25,
            .25, .25, .28, .25, .24, .25,
            .20, .25, .30, .25, .24, .25,
            .25, .25, .27, .25, .26, .29];

            
function printAndGetHighScore(massive) {
    var highScore = 0;
    for (var i = 0; i < massive.length; i++) {
        console.log("Bubble solution # " + i + " score: " + massive[i]);
        if (massive[i] > highScore) { 
            highScore = massive[i];
        }
    }
    console.log("Bubble tests: " + massive.length);             
    return highScore;
}

function getBestSolution(highScore, massive) {
    var bestSolutions = [];
    for (var i = 0; i < massive.length; i++) {
        if (massive[i] == highScore){
            bestSolutions.push("#" + i);
        }
    }
    return bestSolutions;
}

function getMostCostEffectiveSolution(scores, costs, highScore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}

var highScore = printAndGetHighScore(scores);
var bestSolutions = getBestSolution(highScore, scores);
var mostCostEffectiveSolution = getMostCostEffectiveSolution(scores, costs, highScore);

console.log("Highest bubble score: " + highScore);
console.log("Best Solutions: " + bestSolutions);
console.log("Most cost effective solution " + mostCostEffectiveSolution);



