const user = {
    name: 'David',
    dob: '2000-12-18T16:14:58.395Z',
    isActive: true,
    createdAt: '2017-12-18T16:14:58.395Z',
};

const {name, ...otherUserInfo} = user;

console.log('name ', name);
console.log('otherUserInfo ', otherUserInfo);