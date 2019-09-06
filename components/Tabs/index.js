// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabContainer = document.querySelector('.topics');

    axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        // debugger
        response.data.topics.forEach(topic => {
            const newTab = Tab(topic)
            return newTab;
        });
    })

    .catch(error => {
        console.log(error);
    })


function Tab(tab1){
    const divTab = document.createElement('div');

    tabContainer.appendChild(divTab);
    divTab.classList.add('tab');  
    divTab.textContent = tab1;

    return divTab;
}

Tab();


