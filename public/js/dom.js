function openComments(index) {

    var x = document.getElementById("opencomments" + index);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


function countDown() {
    var msg = document.getElementsByClassName("messageBox")[0]
    charLeftLabel = "wordCounter"
    charLeft = document.getElementsByClassName(charLeftLabel)[0]
    maxChar = 140
    maxCharWarn = 20;

    // show characters left at start
    charLeft.innerHTML = maxChar;

    // update while typing
    (function at() {
        setTimeout(function() {
            charLeft.innerHTML = maxChar - msg.value.length;

            // whether or not to display warning class based on characters left
            var warnLabel = msg.value.length >= maxChar - maxCharWarn ? " warning" : "";
            charLeft.className = charLeftLabel + warnLabel;
        }, 1);
    }());
};