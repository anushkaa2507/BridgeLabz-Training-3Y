function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve("Profile Loaded")
                : reject("Profile Failed");
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve("Posts Loaded")
                : reject("Posts Failed");
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.3
                ? resolve("Messages Loaded")
                : reject("Messages Failed");
        }, 1000);
    });
}

async function loadDashboard() {
    let startTime = Date.now();

    let results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    results.forEach(result => {
        if (result.status === "fulfilled") {
            console.log("Success:", result.value);
        } else {
            console.log("Failed:", result.reason);
        }
    });

    let endTime = Date.now();

    console.log("Total time:", (endTime - startTime) / 1000, "seconds");
}

loadDashboard();