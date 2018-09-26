let obj = {
getUserList() {
    return [
        {
            email: "phongpham2140051@gmail.com",
            firstname: "Phong",
            lastname: "Phạm",
            password: "29091996",
          

        },
        {
            email: "phongpham2140051@gmail.com",
            firstname: "Phong 2",
            lastname: "Phạm",
            password: "123456",

        },
        {
            email: "phongpham2140051@gmail.com",
            firstname: "Phong 3",
            lastname: "Phạm",
            password: "123456789",

        }
    ];

},
checkUser(email, password) {
    let userList = this.getUserList();
    let userInfo = null;
    console.log(email, password, userList);
    for (let index in userList) {
        if (userList[index].email === email && userList[index].password === password) {
            userInfo = {
                email: userList[index].email,
                name: (userList[index].firstname + " " + userList[index].lastname)
            };
            break;
        }

    }
    return userInfo;
},

};


module.exports = obj;