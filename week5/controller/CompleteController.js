import Complete from "../DOM/Complete.js";
import TodoController from "./TodoController.js";

class CompleteController {
    constructor(completeText){
        this.newComplete = new Complete(completeText);

        this.delBtnNode = this.newComplete.getDelBtn();
        this.returnBtnNode = this.newComplete.getReturnBtn();
        this.innerNode = this.newComplete.getInnerText();


        this.delBtnNode.addEventListener('click', () => {
            this.delComplete();
        })
        this.returnBtnNode.addEventListener('click', () => {
            this.moveBackToTodoList();
        })
    }

    addComplete() {
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.newComplete.addRow());
    }
    

    delComplete(){
        const CompleteList = document.getElementById("complete-list");
        CompleteList.removeChild(this.newComplete.getRow());
    }

    moveBackToTodoList(){
        this.innerNode.classList.toggle('done-text');
        this.returnBtnNode.classList.toggle('done-btn');

        if (this.returnBtnNode.innerText === '되돌리기'){
            this.delComplete();
            this.returnTodo();
        }
        }

     returnTodo(){
        const todoText = this.innerNode.innerText;
        const returnTodoController = new TodoController(todoText);
        returnTodoController.addTodo();
        }
}

export default CompleteController;