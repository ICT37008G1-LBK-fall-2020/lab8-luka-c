// 2.	L802 დაწერეთ 3 ფუნქცია რომლებიდანაც პირველი აბრუნებს 10 
// წამის გავლის შემდეგ მიმდინარე დროიდან აღებული წამებს, ხოლო
// მეორე 20 წამის გვალის შემდეგ მიმდინარე დროდიან აღებული წუთებს,
// ხოლო მესამე მიმდინარე დროიდან აღებული საათებს,
// გამოიტანეთ 3-ვე ფუნქციის მიერ დაბრუნებული რიცხვების ჯამი.

let promise1 = new Promise((resolve,reject) =>
{
    setTimeout(() =>
    {
        let seconds = new Date().getSeconds();
        resolve(seconds);
        console.log('მიმდინარე დროიდან აღებული წამია: '+seconds);
    }, 10000);
});

let promise2 = new Promise((resolve,reject) =>
{
    setTimeout(() =>
    {
        let minutes = new Date().getMinutes();
        resolve(minutes);
        console.log('მიმდინარე დროიდან აღებული წუთია: '+minutes);
    }, 20000);
});

let promise3 = new Promise((resolve, reject) =>
{
    setTimeout(() =>
    {
        let hours = new Date().getHours();
        resolve(hours);
        console.log('მიმდინარე დროიდან აღებული საათია: '+hours);
    }, 30000);
});


Promise.all([promise1,promise2,promise3])
.then(values => {
    console.log ('');
    console.log('3-ვე ფუნქციის მიერ დაბრუნებული რიცხვების ჯამია:');
    console.log(values[0] + values[1] + values[2]);
})