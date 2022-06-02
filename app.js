// grab DOM elements

const inputName = document.getElementById('input-name');
const nameDisplay = document.getElementById('name-display');


inputName.addEventListener('input', () => {
    const name = inputName.value;
    nameDisplay.textContent = name;
});
// set event listeners
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
