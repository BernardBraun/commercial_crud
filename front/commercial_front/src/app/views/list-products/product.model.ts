export class Product {
    id!:number;
    name!:string;
    imgLink!:string;
    category!:string;
    price:number;
    amount!:number;

    constructor(
        id: number,
        name: string,
        imgLink: string,
        category: string,
        price: number,
        amount:number
    ){
        this.id = id;
        this.name = name;
        this.imgLink = imgLink;
        this.category = category;
        this.price = price;
        this.amount = amount;
    }
}
