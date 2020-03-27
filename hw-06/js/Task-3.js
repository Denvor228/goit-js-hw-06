'use strict';

import users from './users.js';

const getUsersWithGender = (users, gender) => {
    // твой код
    let nameUser = [];
    const usersGender = users.filter(user => {
        if (user.gender === gender) {
            nameUser.push(user.name);
        }
    });

    return nameUser;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]