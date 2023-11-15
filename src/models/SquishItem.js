function SquishItem(name){
    this.name = name ?? '';

    //set the default status to false for want
    this.status = false;

    //create the methods to sort between false(want) and true(got)
    this.gotIt = function() {
        this.status = 'got';
    }

    this.wantIt = function() {
        this.status = 'want';
    }

    //Set default favorite status to false
    this.favorite = false;


    this.favoriteIt = function() {
        this.favorite = !this.status;
    }
    //return the decorated object
    return name;
}

export default SquishItem;
