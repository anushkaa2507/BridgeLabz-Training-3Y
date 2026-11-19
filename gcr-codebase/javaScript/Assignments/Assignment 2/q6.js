let count = 0;


function increment() {
    count++;
    console.log("Incremented:", count);

    
    function showCount() {
        console.log("Current Count:", count);
    }

    showCount();
}


function decrement() {
    count--;
    console.log("Decremented:", count);
}


increment();
increment();
increment();

decrement();
decrement();
