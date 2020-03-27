'use strict';

import users from './users.js';

const getUsersWithEyeColor = (users, color) => {

    const eyeColor = users.filter(user => {
        return user.eyeColor === color;
    });

    return eyeColor;
    // твой код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]