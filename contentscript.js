// First check if user is signed in
var githubSignIn = document.getElementsByClassName("auth-form-header");

if (githubSignIn.length > 0) {
  alert("Sign into GitHub first to see your notifications.")
} else {

  if (window.location.href == "https://github.com/notifications?query=is%3Aunread") {

        // Then check if there are any notifications before generating the button
      var notificationList = document.getElementsByClassName("list-style-none bg-gray   js-navigation-container js-navigation-container-no-mouse js-active-navigation-container");
      
      if (notificationList[0].childElementCount > 0) {

        // Create button
        var explodeButton = document.createElement("button");
        // Add button styling
        explodeButton.classList.add("btn", "mr-3", "ml-3");
        explodeButton.style.backgroundImage = "none";
        explodeButton.style.background = "linear-gradient(to bottom, #fff5b1 0%, #ffdf5d 100%)";
        explodeButton.innerText = "Explode into new tabs"
        
        // Insert on page
        var dropDownList = document.getElementsByClassName("dropdown details-reset details-overlay ml-3 d-none d-md-block flex-shrink-0")[0]
        dropDownList.insertAdjacentElement("afterEnd", explodeButton)
        
        explodeButton.addEventListener("click", function(){
          var allNotifications = notificationList[0].children

          for (var i = 0; i < allNotifications.length; i++) {
            var notificationLink = allNotifications[i].querySelector("a");

            window.open(`${notificationLink.href}`, '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          };
        });
      }
  }  
}
