// getting the main element
const mainContent = document.querySelector('#mainContent');

// fetching the content from the json file
fetch('content.json')
    .then(response => response.json())
    .then(sections => {
        sections.forEach(section => {
            mainContent.innerHTML += `
                <section>
                    <h2 class="heading">${section.heading}</h2>
                    <img src="${section.image}" alt="${section.altText}" class="section-image"/>
                    <p class="description">${section.description}</p>
                    <p class="link"><a href="#" target="_blank">${section.linkText} &emsp;<span class="arrow">&rarr;</span></a></p>
                </section>
            `;
        });
    });

// Toggle Dark Mode
let darkMode = false;
const buttonToToggle = document.querySelector('#toggleMode');
const bodyElement = document.querySelector('body');
buttonToToggle.addEventListener('click', () => {
    bodyElement.classList.toggle('dark-mode');

    //inverting the links text color only if the screen size is greater than 720px
    if(window.innerWidth >= 720){
        const links = document.querySelectorAll('.link a');
        links.forEach(link => {
            if(darkMode) {
                link.style.color = 'black';
            } else {
                link.style.color = 'white';
            }
        });
    }

    darkMode = !darkMode;
});