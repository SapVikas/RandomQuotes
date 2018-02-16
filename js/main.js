var randomQuotes = ["Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go" +
"If you are going through hell, keep going.","If you are going through hell, keep going.",
    "Talent does what it can; genius does what it must.",
    "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
    "Hasta la vista, baby."

];
var randomWriters = ["On Golden Pond","Sir Winston Churchill", "Edward George Bulwer-Lytton","Sir Winston Churchill"
,"Terminator 2: Judgment Day"

];
var randomColor=["#fbb0b0","#f35555","#f74dd5","#b14df7","#514df7","#4de1f7","#4af86f","#f9f237","#f9a037","#f97b37"];

function newQuote(){
    var rnd =Math.floor(Math.random()*5) ;
    var rnd1 =Math.floor(Math.random()*10) ;

    document.getElementById("text").innerText = randomQuotes[rnd];
    document.getElementById("author").innerText = randomWriters[rnd];
    document.body.style.background = randomColor[rnd1];
    document.getElementById("text").style.color=randomColor[rnd1];
    document.getElementById("978").style.color=randomColor[rnd1];

}

