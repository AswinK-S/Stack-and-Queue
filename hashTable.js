class hashTable{
    constructor(size){
        this.table = new Array(size);
    }

    hash(key){
        let total=0;
        let WEIRD_PRIME =31;
        for (let i = 0; i<key.length; i++){
            let char = key[i];
            let values = char.charCodeAt(0)-96;
            total =(total*WEIRD_PRIME + values)%this.table.length;
        }
        return total;
    }

    set(key,value){
        let index =  this.hash(key);

        if(!this.table[index]){
            this.table[index]=[];
        }
        this.table[index].push([key,value]);
        }

        get(key){
            let index = this.hash(key);
            if(this.table[index]){
                for(let i=0; i<this.table[index].length; i++){
                    if(this.table[index][i][0]=== key){
                        return this.table[index][i][1];
                    }
                }
            }
            else{
                return "no data";
            }
        }
    }



let obj= new hashTable(6)
obj.set('hello','aswin')
obj.set('hlo','aswin')
obj.set('helo','aswin ks')
obj.set('heo','asw')

console.log(obj.table)
console.log(obj.get('heo'))
console.log(obj.get('he'))






