
let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Workout dataset cannot be empty!");
        }

        this.data = data;
    }

    // Users with more than 7000 steps
    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    // Average calories
    getAverageCalories() {
        let total = this.data.reduce(
            (sum, user) => sum + user.calories, 0
        );

        return total / this.data.length;
    }

    // User summary using map()
    getUserSummary() {
        return this.data.map(user =>
            user.user + " walked " + user.steps +
            " steps and burned " + user.calories + " calories."
        );
    }
}

try {
    let fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:", fitness.getActiveUsers());
    console.log("Average Calories:", fitness.getAverageCalories());
    console.log("User Summary:", fitness.getUserSummary());

} catch (error) {
    console.log("Error:", error.message);
}
