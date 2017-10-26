"use strict";

class Invitation {

    constructor(displayElement){

        displayElement.append(`<img id="image">
                              <h1 id="title"></h1>
                              <p id="date"></p>
                              <p id="start"></p>
                              <p id="end"></p>
                              <p id="location"> </p>
                              <p id="description"></p>`);

        // Set properties on the class
        this.container = displayElement;
        this.imageEl = displayElement.children("img#image");
        this.titleEl = displayElement.children("h1#title");
        this.dateEl = displayElement.children("p#date");
        this.startEl = displayElement.children("p#start");
        this.endEl = displayElement.children("p#end");
        this.locationEl = displayElement.children("p#location");
        this.descriptionEl = displayElement.children("p#description");

    }

    changeText(marker, newText) {
        this[marker].text(newText);
    }

    changeCss(marker, property, newValue) {
        this[marker].css(property, newValue);
    }

    changeAttr(marker, attribute, newValue) {
        this[marker].attr(attribute, newValue);
    }

    lookupEvent(evt) {
        debugger;
        find the pair
        write " "
        invitation.changeText(VAR1, $(VAR2).val());
        return 
    }    


}


// PART 2:

// Create your invitation object
let invitation =  new Invitation($("#invite-display"));
let idMapper = new Map([
    //[#, El, func]
    ['#title-input', ['titleEl', 'changeText']],
    ['#date-input', ['dateEl', 'changeText']],
    ['#start-time', ['startEl', 'changeText']],
    ['#end-time', ['endEl', 'changeText']],
    ['#location-input', ['locationEl']]
    ])

// Add event listeners

$('.input-listen').on('change', invitation.lookupEvent);


$('#title-input').on('keyup', function() {
    invitation.changeText('titleEl', $('#title-input').val());
})
























/*
    changeTitle(newTitle){
        this.titleEl.text(newTitle);
    }


    changeDate(newDate) {
        this.dateEl.text("Join us on " + newDate);
    }

    changeStart(newStart) {
        this.startEl.text(newStart);
    }

    changeEnd(newEnd) {
        this.endEl.text(newEnd);
    }

    changeImage(newImage){
        this.imageEl.attr("src", newImage);
    }

    changeFont(newFont) {
        this.container.css("font-family", newFont);
    }

    changeBackground(newBackground) {
        this.container.css("background-color", newBackground);
    }

     changeLocation(newLocation) {
        this.locationEl.text(newLocation);
    }

    changeDescription(newDescription) {
        this.descriptionEl.text(newDescription);
    }
    */