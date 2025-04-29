import Button from "./Button.js";
import Div from "./Div.js";

class Complete {
    constructor(completeText){
        this.row = new Div('', 'row').node;

        this.innerText = new Div(completeText, 'text-box');

        this.returnBtn = new Button('return.png', 'return-btn', '되돌리기');  
        this.delBtn = new Button('delete.png', 'del-btn', '삭제'); 
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