import { Request, Response } from "express";
import knex from "knex";
import config from "../../knexfile";

const knexInstance = knex(config)

type Cars = { 
    name: string,
    brand_id: number

}

const index = async (req:Request,res:Response) =>{
    try {
        const cars:Cars[] = await knexInstance("cars").select("cars.name", "brands.name as brand").join("brands","brands.id","=","cars.brand_id")
        res.status(200).send(cars)

    } catch (error) {
        res.send(error)
    }
}




export default {index}