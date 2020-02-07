export class Blacklist {
  _profileLinks;
  _postMessage;
  // this will be set in the constructor via _instantiateBlacklist with a chrome API call message from the content script
  // if this is too convoluted, other methods can be used to pass the chrome.storage call from the content script
  _usernames = ['adamstein', 'WASP'];
  _wasp = 'WASP';

  constructor() {
    this._profileLinks = document.getElementsByClassName('post-author');
    this._instantiateBlacklist();
  }

  _instantiateBlacklist() {
    // make chrome get request by sending message to content script
    // this script cannot access the chrome storage API
  }

  _hideChildren(parentNode) {
    parentNode.childNodes.forEach(element => {
      element.style.backgroundColor = 'black';
      element.style.color = 'black';

      if (element.nodeName === 'DIV') {
        this.hideChildren(element);
      } else if (
        element.nodeName === 'A' ||
        element.nodeName === 'IMG' ||
        element.nodeName === 'SPAN' ||
        element.nodeName === 'SMALL'
      ) {
        element.style.display = 'none';
      }
    });
  }

  _hidePost(postDiv) {
    let postMessage = postDiv.querySelector('.post-message');
    let posted = postDiv;
    postMessage.style.display = 'none';
    posted.style.backgroundColor = 'black';
    // downvotePost(postDiv);

    while (postDiv.firstChild) {
      postDiv.removeChild(postDiv.firstChild);
    }

    let node = document.createElement('h1');
    let textnode = document.createTextNode('User Redacted');

    node.appendChild(textnode);
    posted.appendChild(node);
  }

  redactPosters() {
    Array.prototype.forEach.call(this._profileLinks, (profileLink) => {
      this._usernames.forEach(user => {
        if (profileLink.querySelector('A').innerHTML === user) {
          console.log(`Redacted: ${user}`);
          this._hidePost(profileLink.parentNode);
        }
      });
    });
  }
}
