import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,OneToMany } from "typeorm"
import { Order } from "./Orders.js"

@Entity({name:"users"})
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({length: 100,type:"varchar"})
    name!: string

    @Column({length:50,type:"varchar",unique:true})
    email!: string

    @Column({length:100,type:"varchar"})
    password!: string

    @Column({type:"varchar",default:"client"})
    role!:"client" | "admin"

    @CreateDateColumn({name:"created_at"})
    createdAt!:Date;

    @OneToMany(() => Order,(user) => user.user)
    orders!: Order[]; 
    
}