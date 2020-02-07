/* 

let borderSize = Math.floor(Math.random() * 100);
document.body.style.border = `${borderSize}px solid yellow`;

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

*/

import { Blacklist } from './blacklist.js';

window.addEventListener('load', () => {
  const Redactotron = new Blacklist();

  Redactotron.redactPosters();
});
