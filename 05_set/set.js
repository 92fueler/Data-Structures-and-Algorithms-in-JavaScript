function Set() {
    //property 
    this.items = {}; 

    //methods 

    //add() 
    this.add = function(value) {
        if (this.has(value)) {
            return false;
        }

        this.items[value] = value;
        return true;
    }

    //has() 
    this.has = function(value) {
        return this.items.hasOwnProperty(value);
    }

    //remove()
    this.remove = function(value) {
        if (!this.has(value)) {
            return false;
        }

        delete this.items[value];
        return true;
    }

    //clear()
    this.clear = function(){
        this.items = {};
    }

    // size()
    this.size = function() {
        return Object.keys(this.items).length;
    }

    this.values = function() {
        return Object.keys(this.items);
    }

}