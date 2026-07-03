import {DataSource} from "typeorm"
import { User } from "../Models/User.js"
import { Product } from "../Models/Products.js"
import { Order } from "../Models/Orders.js"
import { OrderItem } from "../Models/Order_Items.js"



export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "santafe",
    database: "tienda",
    synchronize: true,
    //dropSchema:true,//vacia la base de datos para hacer pruebas
    logging: false,
    entities: [User,Product,Order,OrderItem],
    subscribers: [],
    migrations: [],
})

