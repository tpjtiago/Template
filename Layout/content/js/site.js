// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function copyToClipboard(idElement) {
    // Get the text field
    var copyText = document.getElementById(idElement);

    console.log(copyText.innerText)
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.innerText);
  }