// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {
    const divHeader = document.createElement('div');
    const date = document.createElement('span');
    const h1 = document.createElement('h1');
    const temp = document.createElement('span');

    divHeader.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    divHeader.appendChild(date);
    divHeader.appendChild(h1);
    divHeader.appendChild(temp);

    date.textContent = 'MARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return divHeader;
}

