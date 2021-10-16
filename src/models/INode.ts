import { IBlock } from "./IBlock";

interface INode{
    url: string,
    name: string,
    online: boolean ,
    loading: boolean,
    status?: string;
    blocks?: IBlock[]
}
export{INode}