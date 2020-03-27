'use strict';

import users from './users.js';

const calculateTotalBalance = users => {
    // твой код
    const usersBalance = users.reduce((accum, user) => {
        return accum + user.balance;
    }, 0);
    return usersBalance;
};

console.log(calculateTotalBalance(users));