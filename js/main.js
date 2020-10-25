/*
    Demo basic initialization if handlebar template
*/

//let theTemplateScript = document.getElementById('hndl-address').innerHTML;
console.log(APP.view.address);

// Compile the template
let theTemplate = Handlebars.compile(APP.view.address);

// Define our data object
let context = {
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
};

// Pass our data to the template
let theCompiledHtml = theTemplate(context);

console.log(theCompiledHtml);
// Add the compiled html to the page
document.getElementById('content-placeholder').innerHTML = theCompiledHtml;