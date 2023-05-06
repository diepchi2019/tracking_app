class Todo {

    id: string;
    text: string;
    constructor(todoText: string) {
        this.text = todoText;
        this.id = new Date().toTimeString();
    }
}

export default Todo;