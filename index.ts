export interface IArrayList<T> {
    add(data: T): void;
    get(index: number): T;
    size(): number;
    remove(): void;
}
class Index<T> implements IArrayList<T>{
    container: Array<T>;

    constructor() {
        this.container = [];
    }

    add(data: T): void {
        this.container.push(data);
    }

    get(index: number): T {
        return this.container[index];
    }

    remove(): void {
        this.container.pop()
    }

    size(): number {
        return this.container.length;
    }
}


type result={
    title:string

}

let arrayList = new Index<result>();
arrayList.add( {title:"JS"});
arrayList.add( {title:"PHP"});
arrayList.add( {title:"Java"});
arrayList.remove()
console.log(arrayList.get(1))
console.log(arrayList.container)
