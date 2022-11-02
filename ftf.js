let pinks;
let bg;

function setup(){
   createCanvas(windowWidth, (1080*windowWidth)/1920);
   console.log("it works!");


}


function preload(){
  pinks = loadImage('ftf_data/writing.png');
  bg = loadImage('ftf_data/background.png');

}

function draw(){

   background(bg);

   fill(255);
   textSize(18);
   textAlign(CENTER);

if (mouseX>=0&&mouseX<=width/5&&mouseY>=0&&mouseY<=height/3){
   text('First Things First',width/2, height/3);
   text('First Things First',width/2, 2*height/3);
}
if (mouseX>=width/5&&mouseX<=2*width/5&&mouseY>=0&&mouseY<=height/3){
   text('A Manifesto',width/2, height/3);
   text('A Manifesto',width/2, 2*height/3);
}
if (mouseX>=2*width/5&&mouseX<=3*width/5&&mouseY>=0&&mouseY<=height/3){
   text('1964',width/2, height/3);
   text('2020',width/2, 2*height/3);
}
if (mouseX>=3*width/5&&mouseX<=4*width/5&&mouseY>=0&&mouseY<=height/3){
   text('We, the undersigned, are graphic designers, photographers and students who have been \n brought up in a world in which the techniques and apparatus of advertising have persistently \n been presented to us as the most lucrative, effective and desirable means of using our talents. ',width/2, height/3);
   text('We, the undersigned, are designers who have been raised in a world in which we put \n profit over people and the planet in an attempt to grease the wheels of capitalism and \n keep the machine running. ',width/2, 2*height/3);
}
if (mouseX>=4*width/5&&mouseX<=width&&mouseY>=0&&mouseY<=width/3){
   text('We have been bombarded with publications devoted to this belief, applauding the work of \n those who have flogged their skill and imagination to sell such things as:',width/2, height/3);
   text('Our time and energy are increasingly used to manufacture demand, to exploit \n populations, to extract resources, to fill landfills, to pollute the air, to promote \n colonization, and to propel our planet’s sixth mass extinction. We have helped to create \n comfortable, happy lives for some of our species and allowed harm to others; \n our designs, at times, serve to exclude, eliminate, and discriminate.',width/2, 2*height/3);
}



if (mouseX>=0&&mouseX<=width/6&&mouseY>=height/3&&mouseY<=2*height/3){
   text('cat food, stomach powders, detergent, hair restorer, striped toothpaste, aftershave lotion, \n beforeshave lotion, slimming diets, fattening diets, deodorants, fizzy water, cigarettes, roll-ons, \n pull-ons and slip-ons.',width/2, height/3);
   text('Many design teachers and professionals perpetuate this ideology; the markets reward \n it; a tide of imitations and “likes” reinforces it. Encouraged in this direction, designers \n then apply their skills and imagination to sell fast fashion, fast cars, and fast food; \n disposable cups, bubble wrap, and unending amounts of single-use plastics; fidget \n spinners, microwave dinners, and nose hair trimmers. ',width/2, 2*height/3);
}
if (mouseX>=width/6&&mouseX<=width/3&&mouseY>=height/3&&mouseY<=2*height/3){
   text('By far the greatest time and effort of those working in the advertising industry are wasted on \n these trivial purposes, which contribute little or nothing to our national prosperity.',width/2, height/3);
   text('We market unhealthy body images and diets; products and apps that propagate social \n isolation and depression; the consumption of unbalanced food systems; we sell pills to \n pop, tiks to tok, and a scrolling feed that never stops… and then the desire to consume \n it all over again and again.  ',width/2, 2*height/3);
}
if (mouseX>=width/3&&mouseX<=width/2&&mouseY>=height/3&&mouseY<=2*height/3){
   text('In common with an increasing number of the general public, we have reached a saturation \n point at which the high pitched scream of consumer selling is no more than sheer noise. ',width/2, height/3);
   text('Yes, commercial work has always paid the bills, but many designers have let it become, \n in large measure, what designers do. This, in turn, is how the world perceives design.',width/2, 2*height/3);
}
if (mouseX>=width/2&&mouseX<=2*width/3&&mouseY>=height/3&&mouseY<=2*height/3){
   text('We think that there are other things more worth using our skill and experience on. ',width/2, height/3);
   text('Many of us have grown increasingly uncomfortable with this view of design. Because of this, \n we call for a massive change in what and how designers design. Climate change is critically \n entangled with class, race, and gender-based dominance, we can no longer push \n merely for sustainability, but must create new systems that undo \n and heal what’s been done.',width/2, 2*height/3);
}
if (mouseX>=2*width/3&&mouseX<=5*width/6&&mouseY>=height/3&&mouseY<=2*height/3){
   text('There are signs for streets and buildings, books and periodicals, catalogues, instructional \n manuals, industrial photography, educational aids, ',width/2, height/3);
   text('What We Must Do \n We must challenge and examine the histories, processes, and ethics of design and \n develop new creative skills, resources, collaborations, and languages of design.',width/2, 2*height/3);
}
if (mouseX>=5*width/6&&mouseX<=width&&mouseY>=height/3&&mouseY<=2*height/3){
   text('films, television features, scientific and industrial publications and all the other media through which \n we promote our trade, our education, our culture and our greater awareness of the world.',width/2, height/3);
   text('We must support community-based efforts to advance and promote justice, healing, \n co-existence, and mutual respect. \n We must understand that we are not outside of nature; we are a part of a complex \n system and our actions must reflect that knowledge.',width/2, 2*height/3);
}



if (mouseX>=0&&mouseX<=width/5&&mouseY>=2*height/3&&mouseY<=height){
   text('We do not advocate the abolition of high pressure consumer advertising: this is not feasible. ',width/2, height/3);
   text('We must reverse our profession’s priorities in favor of more inclusive, empathetic, and \n engaged forms of action — a mind-shift that goes beyond sustainability — towards \n regeneration, exploration, and co-creation of a non-exploitative, non-appropriative \n set of social-environmental relations. \n We must commit to reconnecting design, manufacturing, distribution, and use of the \n things we design to the Earth — and all of its inhabitants.',width/2, 2*height/3);
}
if (mouseX>=width/5&&mouseX<=2*width/5&&mouseY>=2*height/3&&mouseY<=height){
   text('Nor do we want to take any of the fun out of life. ',width/2, height/3);
   text('We must direct our skills for the betterment of humanity towards \n a more ecological civilization. \n We believe all of these principles should be integrated into \n multidisciplinary design education.',width/2, 2*height/3);
}
if (mouseX>=2*width/5&&mouseX<=3*width/5&&mouseY>=2*height/3&&mouseY<=height){
   text('But we are proposing a reversal of priorities in favour of the more useful and more lasting \n forms of communication. ',width/2, height/3);
   text('We acknowledge the complex and varied nature of designing, which has many \n possible uses and outcomes. We do not want to take any of the fun out of life. But we \n are proposing a reversal of priorities in favor of more useful, generative, \n and equitable forms of design.',width/2, 2*height/3);
}
if (mouseX>=3*width/5&&mouseX<=4*width/5&&mouseY>=2*height/3&&mouseY<=height){
   text('We hope that our society will tire of gimmick merchants, status salesmen and hidden \n persuaders, and that the prior call on our skills will be for worthwhile purposes. ',width/2, height/3);
   text('In 1964, 22 visual communicators, young and old, signed the original call for our \n abilities to be valued. In 1999, 33 designers and commentators signed an updated \n version of First Things First published in magazines around the world, and the document \n attracted hundreds of signatures online. In 2014 – on the 50th anniversary of the \n manifesto – over 1600 designers across the world renewed their commitment \n to the manifesto.',width/2, 2*height/3);
}
if (mouseX>=4*width/5&&mouseX<=width&&mouseY>=2*height/3&&mouseY<=height){
   text('With this in mind we propose to share our experience and opinions, and to make them \n available to colleagues, students and others who may be interested.',width/2, height/3);
   text('With the ongoing destruction of essential living systems on our planet, this message \n has only grown more urgent. As we celebrate the 50th anniversary of Earth Day, we \n renew the previous manifestos with a greater sense of urgency as we see the \n compounded effects of our climate crisis unfold before us. It is imperative that we take \n climate action now.',width/2, 2*height/3);
}
}
function draw(){
  image(pinks,mouseX, mouseY, windowWidth/6, (2*windowHeight)/3);
}
