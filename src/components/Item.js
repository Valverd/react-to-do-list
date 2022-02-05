class Item{

    createID(){
        return Math.random().toString(16).substring(2);
    };

    constructor(text){
        this.text = text;
        this.id = this.createID();
        this.done = false;
    };

};

export default Item;