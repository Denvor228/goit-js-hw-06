'use strict';

import users from './users.js';

//=====================================
// show users' names

const getUserNames = users => {
    // твой код
    const getName = users.map(user => {
        return user.name;
    })
    return getName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ====================================
// show users with given eyes color

const getUsersWithEyeColor = (users, color) => {

    const eyeColor = users.filter(user => {
        return user.eyeColor === color;
    });

    return eyeColor;
    // твой код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//===================================================
// show users with this gender

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

//=====================================================
// show active users

const getInactiveUsers = users => {
    // твой код
    const active = users.filter(user => {
        return !user.isActive;
    });

    return active;
};


console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//==================================================
//find user by email address

const getUserWithEmail = (users, email) => {
    // твой код
    const uniqueUser = users.find(user => {
        return user.email === email;
    });

    return uniqueUser;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//==================================================================
// users between given ages

const getUsersWithAge = (users, min, max) => {
    // твой код
    const usersAge = users.filter(user => {
        return user.age < max && user.age > min;
    });

    return usersAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//==================================================
// summ of all users' balances

const calculateTotalBalance = users => {
    // твой код
    const usersBalance = users.reduce((accum, user) => {
        return accum + user.balance;
    }, 0);
    return usersBalance;
};

console.log(calculateTotalBalance(users));

//=======================================
// users with this friend name

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

//=========================================================
// sorted by friends amount users


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


//==================================================
//  sorted list of users' skills without repeating


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