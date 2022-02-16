const anthem = 'amar sonar bangla ami tomay valo basi';
const words = anthem.split(' ');

function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please array';
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const friends = ['ashik', 'babu', 'hasibul', 'kamal'];
const myFriend = megaFriend(friends);
// console.log(myFriend);

if (friends.indexOf('hasib') != -1) {
    // console.log('hasib ase');
}
if (friends.includes('babu')) {
    console.log('hasib bul ase')
}
else {
    console.log('hasib nai');
}

const second = [1, 2, 3];
const combine = friends.concat(second);
console.log(combine);