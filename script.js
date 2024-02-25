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
                    <p class="description">${section.description}</p>
                    <p class="link"><a href="#" target="_blank">${section.linkText}</a></p>
                    <img src="${section.image}" alt="${section.altText}" class="section-image"/>
                </section>
            `;
        });
    });