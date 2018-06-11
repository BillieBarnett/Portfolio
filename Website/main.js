//function visitorName() {
//var nameOfVisitor = prompt("What is your name?");
//var message = "Hello " + nameOfVisitor + ". Thank you for //visiting my site. Please feel free to explore.";
//alert(message);
//console.log(message);
//}

//visitorName();



//Slidshow Start//

var myIndex = 0;
slideshow();

function slideshow() {
    var i;
    var x = document.getElementsByClassName("design-pics");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(slideshow, 2500);
}

var myIndex1 = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("word");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex1++;
    if (myIndex1 > x.length) { myIndex1 = 1 }
    x[myIndex1 - 1].style.display = "block";
    setTimeout(carousel, 2500);
}


var myIndex2 = 0;
carousel2();

function carousel2() {
    var i;
    var x = document.getElementsByClassName("cpu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex2++;
    if (myIndex2 > x.length) { myIndex2 = 1 }
    x[myIndex2 - 1].style.display = "block";
    setTimeout(carousel2, 2500);
}

//Slidshow End//


