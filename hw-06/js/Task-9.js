'use strict';

import users from './users.js';

const getNamesSortedByFriendsCount = users => {
    // твой код
    const sortedByFriends = users.sort((prevUser, nextUser) => {
        if (prevUser.friends.length > nextUser.friends.length) return 1;
        if (prevUser.friends.length < nextUser.friends.length) return -1;
    });
    const getName = sortedByFriends.map(user => {
        return user.name;
    })
    return getName;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]