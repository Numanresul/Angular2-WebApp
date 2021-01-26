// export class Product{
//     id!:number;
//     name!:number;
//     description!:string;
//     image!:string;
//     price!:number;   
// }

export class data {
    id!:number;
    name!:string;
    description!:string;
    image!:string;
    price!:number; 
    categories!:Array<categori>;
}
export class Product {
    data!: Array<data>;
}

class categori {
    id!: number;
    name!: string; 
}