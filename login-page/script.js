const forms = document.getElementById("loginForm");
const username = document.getElementById("username").value;
const password = document.getElementById("password").value;

const users = [
  {
    username: "user1",
    password: "password1",
  },
];

forms.addEventListener("submit", function (event) {
  event.preventDefault(); // 폼 제출 이벤트 방지

  console.log("안녕하세요");

  //JSON 데이터와 입력된 아이디, 비밀번호 비교하기
  const user = users.find(function (user) {
    return user.username === username && user.password === password;
  });

  if (user) {
    alert("로그인 성공!");
  } else {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
  }
});
