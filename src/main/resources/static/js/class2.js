window.onload = () => {
    console.log("class2.html: " + localStorage.username);
    alert(localStorage.username); //window 생략가능

    const btns = document.querySelectorAll("button");
    btn[0].onclick = () => {
        print();
    }
    print();

    btns[1].onclick = () => {
        history.back();
    }
}