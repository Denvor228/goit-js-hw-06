'use strict';

import users from './users.js';

const getInactiveUsers = users => {
    // твой код
    const active = users.filter(user => {
        return user.isActive;
    });

    return active;
};


console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]