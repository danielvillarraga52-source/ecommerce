import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Order } from "./Orders.js";
import { Product } from "./Products.js";

@Entity({ name: "order_items" })
export class OrderItem {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "decimal", precision: 10, scale: 2, name: "price_at_purchase" })
    priceAtPurchase!: number;

    @ManyToOne(() => Order, (order) => order.items, { onDelete: "CASCADE" })
    @JoinColumn({ name: "order_id" })
    order!: Order;

    @ManyToOne(() => Product, { onDelete: "RESTRICT" }) // Evita borrar un curso si ya está comprado
    @JoinColumn({ name: "product_id" })
    product!: Product;
}