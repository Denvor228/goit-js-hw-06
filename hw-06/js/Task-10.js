'use strict';

import users from './users.js';

const getSortedUniqueSkills = users => {
    // твой код

    const userSkills = users.reduce((acc, user) => {
            if (!acc.includes(user.skills)) {
                acc.push(...user.skills)
            }
            const unique = acc.filter((item, pos) => {
                    return acc.indexOf(item) === pos;
                }

            );
            return unique;

        },
        []);
    return userSkills.sort();
}

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]