const { User } = require('../models');

const userData = [
    {
        first_name: 'Bradley',
        last_name: 'Jester',
        email: 'sample@email.com',
        username: 'leybrad_1',
        password: 'password123',
    },
    {
        first_name: 'Alex',
        last_name: 'Lee',
        email: 'sample2@email.com',
        username: 'lexAlee_1',
        password: 'password345',
    },
    
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
