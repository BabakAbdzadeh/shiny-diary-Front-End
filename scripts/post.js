function showStory(e){

  const nodesArr = childrenNodesArr(e.parentNode);
  nodesArr[0].classList.add("invisible");
  nodesArr[1].classList.remove("invisible");
  nodesArr[2].innerHTML = "Close the Chapter";
  nodesArr[2].removeAttribute("onclick","showStory(this);event.preventDefault();")
  nodesArr[2].setAttribute("onclick","closeStory(this);event.preventDefault();");
}


function closeStory(e){

  const nodesArr = childrenNodesArr(e.parentNode);
  nodesArr[0].classList.remove("invisible");
  nodesArr[1].classList.add("invisible");
  nodesArr[2].innerHTML = "Entire Chapter";
  nodesArr[2].removeAttribute("onclick","closeStory(this);event.preventDefault();");
  nodesArr[2].setAttribute("onclick","showStory(this);event.preventDefault();");
}

// Removing #text from childNodes and get actual nodes
function childrenNodesArr( parent ) {
    var node = parent.firstChild;
    var result = [];
    if( node ) {
        do {
            if( node.nodeType === 1 ) {
                result.push( node );
            }
        } while( node = node.nextSibling )
    }
    return result;
}
