'use strict';

import users from './users.js';

const getUsersWithFriend = (users, friendName) => {
    // твой код
    let nameUser = [];
    const usersFriend = users.filter(user => {
        if (user.friends.includes(friendName)) {
            nameUser.push(user.name);
        }
    });

    return nameUser;
};


console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]