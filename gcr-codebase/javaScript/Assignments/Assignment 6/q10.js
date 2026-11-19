function takeOrder() {
    return createStep("Step 1: Order taken");
}

function prepare() {
    return createStep("Step 2: Food prepared");
}

function pack() {
    return createStep("Step 3: Package ready");
}

function dispatch() {
    return createStep("Step 4: Out for delivery");
}

function deliver() {
    return createStep("Delivery completed!");
}

function createStep(message) {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() > 0.2) {
                console.log(message);
                resolve();
            } else {
                reject(new Error("Step failed: " + message));
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();
    } catch (error) {
        console.log("Pipeline failed!");
    }
}

runPipeline();