SP.SOD.executeFunc("callout.js", "Callout", function() {
    var targetElement = document.getElementById('calloutDemo');
    // configure options
    var calloutOptions = new CalloutOptions();
    calloutOptions.ID = 'notificationcallout';
    calloutOptions.launchPoint = targetElement;
    calloutOptions.beakOrientation = 'leftRight';
    calloutOptions.content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    calloutOptions.title = 'My super duper callout';
    var callout = CalloutManager.createNew(calloutOptions);
});