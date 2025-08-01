import type Postagem from "./Postagem";


export default interface Usuario{
    id:number;
    nome:string;
    foto:string;
    senha:string;
    usuario:string;
    postagem?:Postagem[] | null;
}