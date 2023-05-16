function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation").value;
  if (recommendation != null && recommendation.trim() != "") {
    console.log("New recommendation added");

    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation + "\<span\>&#8221;\</span\>";
    document.getElementById("all_recommendations").appendChild(element); 

    recommendation = "";
  }
  showPopup(true);
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}
