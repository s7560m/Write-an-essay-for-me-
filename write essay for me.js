/**
P + A1 + SA1 + SA2 + SA3
P + A1 + SA1
PROOF
P + A1 + SA1 + X
P + A1 + SA2
PROOF
P + A1 + SA2 + X
P + A1 + SA3
PROOF
P + A1 + SA3 + X

P + A2 + SA1
PROOF
P + A2 + SA1 + X
P + A2 + SA2
PROOF
P + A2 + SA2 + X
P + A2 + SA3
PROOF
P + A2 + SA3 + X

P + A3 + SA1
PROOF
P + A3 + SA1 + X
P + A3 + SA2
PROOF
P + A3 + SA2 + X
P + A3 + SA3
PROOF
P + A3 + SA3 + X
*/
function writeBodyForMe(point, args, SubArgs, XFactors, proof) {
    var bodyEntirety;
    var bodies = "";
    var transitionWords = ["First", "Second", "Last"];
    var innerTransitionWords = ["To begin", "Next", "Finally"];
    function writeBody(index) { // Writes three points
        bodies += transitionWords[index] + ", " + point + " through " + args[index] + " and this is evident through " + SubArgs[(index) * 3] + ", " + SubArgs[(index) * 3 + 1] + ", and " + SubArgs[(index) * 3 + 2] + ". ";
        for (var i = 0; i < 3; i++) {
            bodies += innerTransitionWords[(index * 3) + i] + ", " + point + " through " + args[index] + " and this is evident in " + SubArgs[(index * 3) + i] + ". " + //P + A1 + SAN 
                proof[(index * 3) + i] + ". " + // PROOF
                point + " through " + args[index] + " and this is evident in " + SubArgs[(index * 3) + i] + " for it demonstrates " + XFactors[(index * 3) + i] + ". "; // P + A1 + SAN + XN
        }
        bodies += point + " through " + args[index] + " and this is evident through " + SubArgs[(index) * 3] + ", " + SubArgs[(index) * 3 + 1] + ", and " + SubArgs[(index) * 3 + 2] + ". ";
    }
    
    function writeEssay() {
        for (var i = 0; i < 3; i++) {
            writeBody(i);
        }
    }
    writeEssay();
    return bodies;

}

/*
writeBodyForMe(point, Args, SubArgs, xfacts, proof)

Use template provided
*/
