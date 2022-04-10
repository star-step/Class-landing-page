
  var divs = ["Div1", "Div2", "Div3", "Div4"];
  var images = ["divImage1", "divImage2", "divImage3", "divImage4"];
  var borders = ["border1", "border2", "border3", "border4"];
  var visibleDivId = null;
  var visibleImageId = null;
  var visibleBorderId = null;
  function divVisibility(divId,imageId,borderId) {
      console.log(imageId);
    if(visibleDivId === divId) {
      visibleDivId = null;
    } else {
      visibleDivId = divId;
    }
    if(visibleImageId === imageId) {
        visibleImageId = null;
    } else {
        visibleImageId = imageId;
    }
    if(visibleBorderId === borderId) {
        visibleBorderId = null;
    } else {
        visibleBorderId = borderId;
    }
    hideNonVisibleDivs();
  }
  function hideNonVisibleDivs() {
    var i, divId, div, imageId, imageDiv,borderId, borderdiv;
    for(i = 0; i < divs.length; i++) {
      divId = divs[i];
      imageId = images[i];
      borderId = borders[i];
      imageDiv = document.getElementById(imageId);
      div = document.getElementById(divId);
      borderdiv = document.getElementById(borderId);
      if(visibleDivId === divId) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    if(visibleImageId === imageId) {
      imageDiv.style.display = "block";
    } else {
      imageDiv.style.display = "none";
    }
    if(visibleBorderId === borderId) {
        borderdiv.style.borderBottom = "2px solid #8264ff";
        borderdiv.style.fontWeight = "bold";
    } else {
        borderdiv.style.borderBottom = "none";
        borderdiv.style.fontWeight = "normal";
    }
    }
  }

$(window).focus(function() {
    console.log('on tab');
});

$(window).blur(function() {
    console.log('changedtab');
});