
let borderSize = Math.floor(Math.random() * 100);

document.body.style.border = `${borderSize}px solid yellow`;

let wasp = "WASP";

var profileLinks = document.getElementsByClassName("profile-link");
var i;
for (i = 0; i < profileLinks.length; i++) {
    let node = profileLinks[i]
    let content = node.textContent
    if (content.indexOf(wasp) !== -1) {
        if (node.parentNode.className === "post-username") {
            profileLinks[i].parentNode.parentNode.parentNode.parentNode.style.display = "none";
        } else {
            profileLinks[i].style.backgroundColor = "red";
        }
    }
}