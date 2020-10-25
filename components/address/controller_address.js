(() => {
    let address;
    
    // Inheriting AppController class
    APP.controller.address = _.assignIn({}, new AppController);
    
    address = APP.controller.address;
    address.template = APP.view.address;
    address.load = () => {
        //let theTemplateScript = document.getElementById('hndl-address').innerHTML;

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
        document.getElementById('content-placeholder').innerHTML = theCompiledHtml;
    }
})();