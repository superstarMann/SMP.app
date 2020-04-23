import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import {VerificationTarget} from "../types/types";

@Entity()

class Verication extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text", enum: ["EMAIL", "PHONE"]})
    target: VerificationTarget;

    @Column({type: "text"})
    payLoad: string;

    @Column({type: "text"})
    key: string;

    @Column({type: "boolean", default: false})
    used: boolean;

    @CreateDateColumn()
    createAt: string;

    @UpdateDateColumn()
    updateAt: string;
}

export default Verication;