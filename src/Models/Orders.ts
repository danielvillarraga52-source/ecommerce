import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { User } from "./User.js"; 
import { OrderItem } from "./Order_Items.js";

@Entity({ name: "orders" })
export class Order {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "decimal", precision: 10, scale: 2, default: 0 })
    total!: number;

    @Column({
        type: "varchar",
        default: "PENDING"
    })
    status!: "PENDING" | "PAID" | "FAILED";

    @Column({ type: "varchar", name: "payment_intent_id", nullable: true })
    paymentIntentId!: string | null; // Guardará el ID de la pasarela de pagos

    @CreateDateColumn({ name: "created_at" })
    createdAt!: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user!: User;

    @OneToMany(() => OrderItem, (item) => item.order, { cascade: true })
    items!: OrderItem[];
}