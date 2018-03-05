var Faker = require('fakerjs');

module.exports = [

    {
        subject: 'This a thread',
        mails: [
            {
                id: 0,
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: true
            },
            {
                id: 1,
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: true
            },
            {
                id: 2,
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: false
            },
            {
                id: 3,
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: false
            }
        ]
    },
    {
        subject: 'Sick today',
        mails: [
            {
                id: 4,
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: true
            },
            {
                id: 5,
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: true
            }
        ]
    }

];