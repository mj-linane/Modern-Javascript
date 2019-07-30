const name = 'MJ';
const age = 30;
const job = 'CS Teacher';
const state = 'Massachusetts';
let html;


// Without template strings (es5)
html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li >' +
    '<li>State: ' + state + '</li>' +
    '</ul >'
;

/**
 * Returns hello
 * @return {string}
 */
function hello() {
  return 'hello';
}


// With template strings (es6)
html = `
    < ul >
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>State: ${state}</li>
        <li>${2 + 2}</li>
        <li>${hello()}</li>
        <li>${age>31 ? 'Over 30' : 'Under 30'}</li>
    </ul >
`;


document.body.innerHTML = html;
