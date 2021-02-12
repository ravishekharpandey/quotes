let quotes=['My father taught me to work; he did not teach me to love it.-Abraham Lincoln',
'Common looking people are the best in the world: that is the reason the Lordmakes so many of them. -Abraham Lincoln',
'How many legs does a dog have if you call the tail a leg? Four. Calling a tail a leg doesnt make it a leg. -Abraham Lincoln',
' My experience has taught me that a man who has no vices has damned fewvirtues. -Abraham Lincoln',
'Let not him who is houseless pull down the house of another, but let him workdiligently and build one for himself, thus by example assuring that his own shallbe safe from violence when built. -Abraham Lincoln',
' Will springs from the two elements of moral sense and self-interest. -Abraham Lincoln',
'My great concern is not whether you have failed, but whether you are content with your failure. -Abraham Lincoln',
'Imagination is more important than knowledge. -Albert Einstein',
'Gravitation is not responsible for people falling in love. -Albert Einstein',
'The hardest thing in the world to understand is the income tax. -Albert Einstein',
'Reality is merely an illusion, albeit a very persistent one. -Albert Einstein',
'The only real valuable thing is intuition. -Albert Einstein',
'A person starts to live when he can live outside himself. -Albert Einstein',
'I am convinced that He (God) does not play dice. -Albert Einstein',
'God is subtle but he is not malicious. -Albert Einstein'
 ]
function newQuote(){
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML=quotes[randomNumber];
}