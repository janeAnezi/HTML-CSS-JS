let containerEl = document.querySelector('.container');
// containerEl.style.backgroundColor = 'yellow';


const careers = ['Software developer','Engineer', 'Web Developer', 'Freelancer', 'Instructor'];



let careerIndex = 0;
console.log(careerIndex, careers.length);
// console.log(careers[careerIndex].length);
let characterIndex = 0;

updateCareers()

function updateCareers() {
    characterIndex++;
    containerEl.innerHTML = `<h1> I am ${careers[careerIndex].slice(0,1)=== 'I' || careers[careerIndex].slice(0,1)=== 'E' ? 'an' : 'a'} ${careers[careerIndex].slice(0, characterIndex)}</h1>`;
   
    
    if ( characterIndex === careers[careerIndex].length ) {
        careerIndex++;
        characterIndex = 0
    }

    if (careerIndex === careers.length) {
        careerIndex = 0;
    }

    setTimeout(updateCareers, 300);
}















// let careerIndex = 0;

// let characterIndex = 0;

// updateText()

// function updateText() {
//     characterIndex++;
//     containerEl.innerHTML = `<h1> I am ${careers[careerIndex].slice(0,1)=== 'I' ? 'an' : 'a'} ${careers[careerIndex].slice(0,characterIndex)}</h1>`;
   

//     if ( characterIndex === careers[careerIndex].length ) {
//         careerIndex++;
//         characterIndex = 0
//     }

//     if (careerIndex === careers.length) {
//         careerIndex = 0;
//     }

//     setTimeout(updateText, 300);
// }

