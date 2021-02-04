let contentBody = document.getElementsByClassName('customBody');
let contentText = document.getElementsByClassName('customText');
let black = function () {
    document.getElementById("mainBody").style.backgroundColor = "white";
    for (var i = 0; i < contentBody.length; i++) {
        contentBody[i].style.backgroundColor = "white";
        contentBody[i].style.color = "rgb(33,37,41)";
    }
    for (var i = 0; i < contentText.length; i++) {
        contentText[i].style.color = "rgb(33,37,41)";
    }
}
let white = function () {
    document.getElementById("mainBody").style.backgroundColor = "rgb(33,37,41)";
    for (var i = 0; i < contentBody.length; i++) {
        contentBody[i].style.backgroundColor = "rgb(33,37,41)";
        contentBody[i].style.color = "white";
    }
    for (var i = 0; i < contentText.length; i++) {
        contentText[i].style.color = "white";
    }
}

export function blackAndWhite() {
    let element = document.getElementById("myid").checked;
    if (!element) {
        black();
    } else {
        white();
    }

}