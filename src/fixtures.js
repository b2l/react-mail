var Faker = require('fakerjs');

module.exports = [

    {
        subject: 'This a thread',
        mails: [
            {
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: true
            },
            {
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: true
            },
            {
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: false
            },
            {
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
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: true
            },
            {
                date: new Date(),
                content: Faker.Lorem.paragraphs(),
                sender: Faker.Internet.email(),
                read: true
            }
        ]
    }

];