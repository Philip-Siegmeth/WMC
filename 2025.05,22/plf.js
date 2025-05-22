export class Frage {
    constructor(frage, optionen, antwort) {
        if (arguments.length !== 3) {
            throw new Error("drei args");
        }
        if (typeof antwort !== "string") {
            throw new Error("last is no String");
        }
        if (!Array.isArray(optionen)) {
            throw new Error("optionen sollte ein Array sein");
        }
        if (typeof frage !== "string") {
            throw new Error("frage sollte ein String sein");
        }
        if (!optionen.includes(antwort)) {
            throw new Error("antwort sollte in optionen enthalten sein");
        }

        this.frage = frage;
        this.optionen = optionen;
        this.antwort = antwort;
    }
}


export class Quiz{
    constructor(arg){
        if(arguments.length !== 1){
            throw new Error ("Only one argument");
        }
        this.fragen = arg.map((pojo)=> new Frage(pojo.frage , pojo.optionen , pojo.antwort));
    }

    getFragenByLength(l){
        return this.fragen.filter(object => object.frage.length>= l);
    }

    getFragenSortedByLength(){
        return this.fragen.sort((a,b) => a.frage.length - b.frage.length);
    }

    getFragenWithOption(option){
        return this.fragen.filter((o)=> o.optionen.includes(option));
    }

    getAverageOptions(){
        let count = 0;
        //this.fragen.forEach((element)=> count += element.optionen.length);
        //return count / this.fragen.length;
        count = this.fragen.reduce((acc, cur) => acc + cur.optionen.length , 0);
        return count / this.fragen.length;
    }
    
    getAllOptions(){
        const s = new Set();
        this.fragen.forEach((f) => {
            f.optionen.forEach((o)=>s.add(o));
        });
        return Array.from(s);
    }
}