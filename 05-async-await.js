// ECMAScript 2017
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

async function getNameWithException() {
  throw new Error('there is some problem in getNameWithException function');
  return 'new name';
}

async function getNameWithReject() {
  return Promise.reject(new Error('there is some problem in getNameWithReject function'));
}

async function exceptionInSyncFunc() {
  return this.notAFunction();
}

async function getNameWithAwaitException() {
  return await getNameWithException();
}

getUserSummary().then((result) => {
    console.log(result);
});

getNameWithException()
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err.message);
  })

getNameWithReject()
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err.message);
  })

getNameWithAwaitException()
  .then((name) => {
    console.log(name);
  })
  .catch((err) => {
    console.log(err.message);
  })

exceptionInSyncFunc()
  .then((result) => {
    console.log('exceptionInSyncFunc ',result );
  })
  .catch((err) => {
    console.log(err.message);
    throw err;
  })

setInterval(() => {}, 1000);
