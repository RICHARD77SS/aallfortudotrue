function handleCredentialResponse(response) {
  
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "387722585186-ro23q8pk1m90f7vje8t592m9vmq6vrev.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    {
      theme: "filled_black", size: "medium", type: "standard", shape: "pill", text:"$ {button.text}",
     logo_alignment: "left"} 
  );
  google.accounts.id.prompt(); 
}