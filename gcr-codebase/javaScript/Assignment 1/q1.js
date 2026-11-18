let userName = "Anushka";
let currHour = new Date().getHours();
if (currHour < 12) {
    console.log(`Good Morning ${userName}!`);
}
else if (currHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
}
else {
    console.log(`Good Evening ${userName}!`);
}