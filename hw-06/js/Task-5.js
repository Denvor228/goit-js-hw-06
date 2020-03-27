'use strict';

import users from './users.js';

const getUserWithEmail = (users, email) => {
    // твой код
    const uniqueUser = users.find(user => {
        return user.email === email;
    });

    return uniqueUser;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}