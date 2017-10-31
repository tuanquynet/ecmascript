const john = {
    firstName: 'John',
    lastName: 'Stone',
    dob: 1970,
};

function getAge(user) {
    return new Promise((resolve, reject) => {
        const now = new Date();
        resolve(now.getFullYear() - user.dob);
    });
}

async function getUserSummary() {
    let user = john;
    //Inside async function we can await to invoke another async/promise function
    // The excution will pause until awaiting function return value.
    const age = await getAge(user);

    return {
        firstName: user.firstName,
        lastName: user.lastName,
        age
    }
}

getUserSummary().then((result) => {
    console.log(result);
});

setInterval(() => {}, 1000);