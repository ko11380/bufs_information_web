function showWriteBox() {
    var writeBox = document.createElement("form");
    writeBox.className = "write";
    writeBox.action="/board";
    writeBox.method="post";

    var p1 = document.createElement("p");

    var title = document.createElement("input");
    title.name = "title";
    title.placeholder = "글 제목";
    title.className = "title";

    p1.appendChild(title);

    writeBox.appendChild(p1);

    var p2 = document.createElement("p");

    var text = document.createElement("textarea");
    text.name = "text";
    text.placeholder = "내용";
    text.className = "large";

    p2.appendChild(text);

    writeBox.appendChild(p2);

    var p3 = document.createElement("p");

    var name = document.createElement("input");
    name.name = "name";
    name.placeholder = "작성자";
    name.className = "name";

    var sper = document.createElement("span");
    sper.innerText = " | ";
    sper.className = "separate";

    var passwd = document.createElement("input");
    passwd.type = "password";
    passwd.name = "passwd";
    passwd.placeholder = "비밀번호";
    passwd.className = "passwd";

    var button = document.createElement("button");
    button.innerText = "완료";
    button.title = "완료";
    button.className = "submit";

    p3.appendChild(name);
    p3.appendChild(sper);
    p3.appendChild(passwd);
    p3.appendChild(button);

    writeBox.appendChild(p3);

    var current = document.getElementById("board_content");
    var first = current.firstChild;
    current.insertBefore(writeBox,first);

    var wb = document.getElementById("write_button").style.display='none';
    return false;
}