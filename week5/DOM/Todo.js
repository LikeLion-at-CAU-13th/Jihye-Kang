import Button from "./Button.js";
import Div from "./Div.js";

class Todo {
    constructor(todoText){
        this.row = new Div('', 'row').node;

        this.innerText = new Div(todoText, 'text-box');
        this.completeBtn = new Button('check.png', 'complete-btn', '완료');
        this.delBtn = new Button('delete.png', 'del-btn', '삭제');
    }
    
    // 만들어진 요소를 한 줄 합쳐서 this.row에 넣고 반환
    addRow() {
        [this.innerText, this.completeBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    // 각 요소의 getter 메서드들
    getRow(){
        return this.row;
    }
    getCompleteBtn() {
        return this.completeBtn.node;
    }
    getDelBtn() {
        return this.delBtn.node;
    }
    getInnerText(){
        return this.innerText.node;
    }
}

export default Todo;