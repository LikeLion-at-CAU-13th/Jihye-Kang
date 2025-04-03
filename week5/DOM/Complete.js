import Button from "./Button.js";
import Div from "./Div.js";
import Todo from "./Todo.js";

class Complete {
    constructor(todoText){ 
        this.row = new Div('', 'row').node;

        this.innerText = new Div(todoText, 'text-box');
        this.returnBtn = new Button('되돌리기', 'return-btn');
        this.delBtn = new Button('삭제', 'del-btn');
    }
    
    // 만들어진 요소를 한 줄 합쳐서 this.row에 넣고 반환
    addRow() {
        [this.innerText, this.returnBtn, this.delBtn].forEach((dom) => {
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    // 각 요소의 getter 메서드들
    getRow(){
        return this.row;
    }

    getReturnBtn() {
        return this.returnBtn.node;
    }

    getDelBtn() {
        return this.delBtn.node;
    }
    
    getInnerText(){
        return this.innerText.node;
    }
}

export default Complete;