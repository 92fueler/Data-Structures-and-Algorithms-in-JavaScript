
//keys
//based on the implement an array code, we want to loop through the keys 

class HashTable{
  constructor(size){
    this.data = new Array(size);
  }
  
  _hash(key){ //this serves as a hash function to get generate the hash for us. 
  //underscore: private property that cannot be accessed outside this object, even though it's technically you can access. 
    let hash = 0;
    for (let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
      this.data[address].push([key, value]);
      console.log(this.data);
    }else{
      this.data[address].push([key, value]);
    }
  }
  get(key){
    let address = this._hash(key);
    const currentBucket = this.data[address];
    console.log(currentBucket);
    if (currentBucket){
      for(let i = 0; i < currentBucket.length; i++){
        if (currentBucket[i][0] === key){
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
  keys(){
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++){
      if (this.data[i]){
        console.log(this.data[i]);
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.keys();

