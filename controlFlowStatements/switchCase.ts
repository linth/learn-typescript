/**
 * switch-case
 *  - show you how to use the switch statement to allow a number of possible execution paths.
 * 
 * 
 * Reference:
 *  - https://www.typescripttutorial.net/typescript-tutorial/typescript-switch-case/
 */

let targetId = 'btnDelete';

// A simple TypeScript switch case example.
switch (targetId) {
    case 'btnUpdate':
        console.log('Update');
        break;
    case 'btnDelete':
        console.log('Delete'); // Delete
        break;
    case 'btnNew':
        console.log('New');
        break;

    default:
        console.log('Default');
        break;
}



