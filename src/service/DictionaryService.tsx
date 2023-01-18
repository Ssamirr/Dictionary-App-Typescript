import axios from "axios";
import { IBaseService } from "./IBaseService";
import { dictionary } from "../models/dictionary";


export class DictionaryService implements IBaseService{
    async getİnfo(word:string): Promise<dictionary[]> {
        let response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        let res: dictionary[] = response.data;
        return res;
    }
}