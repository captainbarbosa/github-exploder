// First check if user is signed in
var githubSignIn = document.getElementsByClassName("auth-form-header");

if (githubSignIn.length > 0) {
  alert("Sign into GitHub first to see your notifications.")
} else {
  
  // Then check if there are any notifications before generating the button
  var notificationList = document.getElementsByClassName("notifications-list");
  
  if (notificationList.length > 0) {
    // Create button
    var tabNav = document.getElementsByClassName("tabnav-tabs")[0];
    var explodeButton = document.createElement("button");
    // Add button styling
    explodeButton.classList.add("btn", "btn-sm", "float-right", "mr-1");
    explodeButton.style.backgroundImage = "none";
    explodeButton.style.background = "linear-gradient(to bottom, #fff5b1 0%, #ffdf5d 100%)";
    explodeButton.innerText = "Open notifications in new tabs"
    
    tabNav.appendChild(explodeButton)
    
    explodeButton.addEventListener("click", function(){
      var matches = document.getElementsByClassName("css-truncate-target js-notification-target js-navigation-open list-group-item-link");

      for (var i = 0; i < matches.length; i++) {
        window.open(`${matches[i].getAttribute("href")}`, '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
      };
    });
  }
}
