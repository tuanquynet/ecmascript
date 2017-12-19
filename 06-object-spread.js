const user = {
    name: 'David',
    dob: '2000-12-18T16:14:58.395Z',
    isActive: true,
    createdAt: '2017-12-18T16:14:58.395Z',
};

const cloneUser = {
    ...user,
    name: 'new name',
    isActive: false,
    createdAt: new Date().toISOString(),
};

console.log('cloneUser');
console.log(cloneUser);