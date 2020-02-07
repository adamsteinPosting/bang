
let borderSize = Math.floor(Math.random() * 100);

document.body.style.border = `${borderSize}px solid yellow`;

let users = ["WASP", "Borzoi"];
let wasp = "WASP";

function hideChildren(parentNode) {
    parentNode.childNodes.forEach(function(element){
        //element.style.display = "none";
        element.style.backgroundColor = "black";
        element.style.color = "black";
        console.log(element.nodeName);
        if (element.nodeName === "DIV") {
            hideChildren(element);
        } else if (element.nodeName === "A") {
            element.style.display = "none";
        } else if (element.nodeName === "IMG") {
            element.style.display = "none";
        }  else if (element.nodeName === "SPAN") {
            element.style.display = "none";
        } else if (element.nodeName === "SMALL") {
            element.style.display = "none";
        }
    })
}

function clickLink(element) {
    var theEvent = document.createEvent("MouseEvent");
    theEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    element.dispatchEvent(theEvent);

    while (element) {
        if (element.tagName === "A" && element.href !== "") {
            if (element.target === "_blank") { window.open(element.href, element.target); }
            else { document.location = element.href; }
            element = null;
        } else {
            element = element.parentElement;
        }
    }
}

function downvotePost(postDiv) {
    let thumbsDown = postDiv.querySelector(".fa-thumbs-down");
    if (thumbsDown.classList.contains("reaction-inactive")) {
        let thumbsDownLink = thumbsDown.parentNode.parentNode;
        //console.log(thumbsDownLink);
        clickLink(thumbsDownLink);
    }
}

function hidePost() {

}

var profileLinks = document.getElementsByClassName("profile-link");
var i;
for (i = 0; i < profileLinks.length; i++) {
    let node = profileLinks[i];
    let content = node.textContent;
    if (content.indexOf(wasp) !== -1) {
        if (node.parentNode.className === "post-username") {
            let postDiv = profileLinks[i].parentNode.parentNode.parentNode.parentNode;
            let postMessage = postDiv.querySelector(".post-message");
            postMessage.style.display = "none";
            downvotePost(postDiv);
            while (postDiv.firstChild) {
                postDiv.removeChild(postDiv.firstChild);
            }

            /*
            hideChildren(postDiv);
            //profileLinks[i].parentNode.parentNode.parentNode.parentNode.style.display = "none";
            //profileLinks[i].parentNode.parentNode.parentNode.parentNode.style.height = "50px";
            //profileLinks[i].parentNode.parentNode.parentNode.parentNode.style.overflow = "hidden";
            */
            let node = document.createElement("h1");
            var textnode = document.createTextNode("User Blocked");
            node.appendChild(textnode);
            postDiv.appendChild(node);
            postDiv.style.backgroundColor = "black";
        }
    }
}