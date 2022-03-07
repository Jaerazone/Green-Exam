const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoButton = document.querySelector("#todo-button");

const todoBoard = document.querySelector("#todo-board");

const result = document.querySelector("#result");

todoButton.addEventListener("click",todoFormButton);

count = 0;

function todoFormButton(event) {
    //버튼을 눌렀을때 li요소 생성 및 추가
    event.preventDefault(); 
    // 이부분 중요한게 input의 text box에서 엔터키를 누르게되면 자동으로 submit이 되기때문에
    // 의미없는 input박스를 하나 더 추가하던지
    //<input type="text" style= "display:none;" >
    // button을 submit으로 변경해보자

    const li = document.createElement("li");
    //체크박스 추가
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    //체크박스 이벤트리스너 추가
    checkbox.addEventListener("click", todoCheck);
    
    //내용 텍스트 노드로 변수생성
    const text = document.createTextNode(todoInput.value);

    //X버튼 변수생성
    const button = document.createElement("button");
    button.textContent="X";
    //X버튼에 이벤트리스너 추가
    button.addEventListener("click",todoDelete);
    
    // li뒤에 붙여줄 체크박스/텍스트/ x버튼을 추가해줌
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(button);
    
    //ul에 li를 추가
    todoBoard.appendChild(li);
    todoInput.value="";

    //카운트 추가
    count++;
    document.querySelector("#result").textContent = `오늘 완료한 할일 : ${count}개`;
}

//todoCheck 체크박스 누르면 회색, 반대면 검정색으로변하는 함수
function todoCheck (event) {
    const checkbox = event.target;
    if(checkbox.checked) {
        //체크박스가 체크되면 li색을 회색으로 바꿈
        checkbox.parentNode.style.color="lightgray";
        count--;
        document.querySelector("#result").textContent = `오늘 완료한 할일 : ${count}개`;
    }
    else {
        //체크박스 체크해제되면 li색을 검정으로 바꿈
        checkbox.parentNode.style.color="black";
        count++;
        document.querySelector("#result").textContent = `오늘 완료한 할일 : ${count}개`;
    }
}

//리스트 삭제하는 함수
function todoDelete(event) {
    //체크박스로 li누르면 삭제
    event.target.parentNode.remove();

    count--;
    document.querySelector("#result").textContent = `오늘 완료한 할일 : ${count}개`;
}

//새로고침 막아주고
// 함수로 todoFormButton 와 todoDelete가 각각 몇번 실행되었는지 체크해본다
//function todoCount(event) {
 //   event.preventDefault(); //새로고침을 막아줌
    
