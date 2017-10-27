"use strict";

// Meggan and Marie had to make several changes to the html file to make
// this work. Major changes: ensuring that every input had 'class="input-listen"',
// an id (which now can't change), and a value (especially where button color
// was listed as 'data-color'). Not elegant, but stubborn ;)

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

    } // end constructor

    lookupEvent(evt) {
        let chgID = "#" + evt.target.id.toString();
        let chgVal = evt.target.value.toString();

        // exit if chgID not in idMapper
        if ( !idMapper.has(chgID) ) { return; }
        
        let chgEl = idMapper.get(chgID)[0];
        let chgProp = idMapper.get(chgID)[1];
        let chgFunc = idMapper.get(chgID)[2];

        // 'this' is not the invitation
        if ( chgFunc === 'changeText' ) {
            invitation[chgEl].text(chgVal);
        } else if ( chgFunc === 'changeCss' ) {
            invitation[chgEl].css(chgProp, chgVal);
        } else if ( chgFunc === 'changeAttr' ) {
            invitation[chgEl].attr(chgProp, chgVal);
        } // end if         
    } // end lookupEvent    

} // end Invitation


// PART 2:

// Create your invitation object
let invitation =  new Invitation($("#invite-display"));
let idMapper = new Map([
    //[#, El, func]
    ['#title-input', ['titleEl', , 'changeText']],
    ['#date-input', ['dateEl', , 'changeText']],
    ['#start-time', ['startEl', , 'changeText']],
    ['#end-time', ['endEl', , 'changeText']],
    ['#location-input', ['locationEl', , 'changeText']],
    ['#description-input', ['descriptionEl', , 'changeText']],
    ['#font', ['container', 'font-family','changeCss']],
    ['#blue', ['container', 'background-color', 'changeCss']],
    ['#pink', ['container', 'background-color', 'changeCss']],
    ['#yellow', ['container', 'background-color', 'changeCss']],
    ['#white', ['container', 'background-color', 'changeCss']],
    ['#dog', ['imageEl', 'src', 'changeAttr' ]],
    ['#unicorn', ['imageEl', 'src', 'changeAttr' ]],
    ['#bday', ['imageEl', 'src', 'changeAttr' ]]
    ])

// Add event listeners

$('.input-listen').on('keyup', invitation.lookupEvent);
$('.input-listen').on('click', invitation.lookupEvent);



/*********************************
        Intermediary Code
**********************************/

/*
    changeText(marker, newValue) {
        this[marker].text(newText);
    }

    changeCss(marker, property, newValue) {
        this[marker].css(property, newValue);
    }

    changeAttr(marker, attribute, newValue) {
        this[marker].attr(attribute, newValue);
    }

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

    $('#title-input').on('keyup', function() {
        invitation.changeText('titleEl', $('#title-input').val());
    })

    */