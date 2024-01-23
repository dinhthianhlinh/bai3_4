// Dữ liệu thử nghiệm
const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
    { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1. Thêm thuộc tính recommendedFood cho mỗi chú chó trong mảng
dogs.forEach(dog => {
    dog.redFood = Math.trunc(dog.weight ** 0.75 * 28);
});

// 2. Tìm chú chó của Sarah và kiểm tra khẩu phần ăn
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.redFood ? 'much' : 'little'}`);

// 3. Tạo mảng chủ của chó ăn quá nhiều và chó ăn quá ít
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.redFood).flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs.filter(dog => dog.curFood < dog.redFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4. In ra thông tin chó ăn quá nhiều và chó ăn quá ít
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// 5 
console.log(dogs.some(dog=>dog.curFood===dog.redFood));
// 6

const checkEatingOkay = dog=>
dog.curFood > dog.redFood *0.9 && dog.curFood <dog.redFood *1.1;
console.log(dogs.some(checkEatingOkay))
// 7 
console.log (dogs.filter(checkEatingOkay))
// 8 
const dogsSorted = dogs.slice().sort((a,b)=>a.redFood-b.redFood);
console.log(dogsSorted)
