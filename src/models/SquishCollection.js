import SquishItem from "@/models/SquishItem";

function SquishCollection() {
let arr = [];

    arr.addItem = function(item){
        this.push(new SquishItem(item));

        // return the array to allow chaining
        return this;
    }

    arr.removeItem = function(item){

    }

    return arr;
}

export default SquishCollection