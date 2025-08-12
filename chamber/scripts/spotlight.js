const membersURL = 'https://raw.githubusercontent.com/Julian-Maccaferri/wdd230/refs/heads/main/chamber/data/members.json';
const spotlightContainer = document.querySelector('#spotlight-container');

async function getSpotlightMembers() {
        const response = await fetch(membersURL);
        const data = await response.json();
        const qualifiedMembers = data.company.filter(member =>
            member.subscription === 'Gold' || member.subscription === 'Silver'
        );

        // Shuffle and select 2-3 random members
        const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());
        const spotlightMembers = shuffled.slice(0, 3);

        displaySpotlightMembers(spotlightMembers);
    }

function displaySpotlightMembers(members) {
    members.forEach(member => {
        const card = document.createElement('section');
        card.classList.add('spotlight-card');

        const img = document.createElement('img');
        img.setAttribute('src', member.img);
        img.setAttribute('width', 'auto');
        img.setAttribute('height', '50px');
        img.setAttribute('alt', `${member.name} logo`);
        img.setAttribute('loading', 'lazy');

        const name = document.createElement('h3');
        name.textContent = member.name;

        const website = document.createElement('a');
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.textContent = 'Visit Website';

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(website);

        spotlightContainer.appendChild(card);
    });
}

getSpotlightMembers();