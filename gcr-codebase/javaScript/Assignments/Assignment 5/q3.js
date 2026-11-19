let user = {
    name: "Anushka",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

user.showName = function() {
    console.log(this.name);
};

user.showName();