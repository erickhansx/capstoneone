const featuredSection = document.getElementsByClassName('featured');
featuredSection.append(headerContainer, featuredHr);

const headerContainer = document.createElement('div');
headerContainer.appendChild(featuredHeader);
const featuredHeader = document.createElement('h1');

const featuredHr = document.createElement('div');

const featuredSpeakers = document.createElement('div');

const featuredSpeaker = document.createElement('h4');

const speakerHighlight = document.createElement('h5');

const speakerText = document.createElement('p');
