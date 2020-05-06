function openComments(index) {

    var x = document.getElementById("opencomments" + index);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}