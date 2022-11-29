// let user = {
//     username: "junil",
//     password: "1234"
// };


class User {
    username;
    password;
    name;
    email;

    constructor(username, password,name,email) {
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    printName() {
        console.log(this.name+"님의 정보")
    }
}

// 싱글톤
class UserMain { 
    static #instance = null;
    static getInstance() {
        if(this.#instance == null){
            this.#instance = new UserMain();
        }
        return this.#instance;
    }

    main() {
        let user = new User("junil","1234","김준일","skjil1218@gmail.com");

        // user.username = "junil";
        // user.password = "1234";
        // user.name = "김준일";
        // user.email = "skjil1218@gmail.com";

        console.log(user);

        localStorage.username = user.username;
        console.log("username:"+localStorage.username); //페이지 이동되어도 데이터가 살아있기때문에 전역변수라고 볼 수 있음

        user.printName();
    }
}

window.onload = () => {
    let userMain = UserMain.getInstance();

    userMain.main();
}