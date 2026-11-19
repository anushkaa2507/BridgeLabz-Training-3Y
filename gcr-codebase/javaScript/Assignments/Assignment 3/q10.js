
"use strict";

function outer() {

    var count = 5;

    const inner = () => {
        console.log(count);
    };

    inner();
}

outer();
