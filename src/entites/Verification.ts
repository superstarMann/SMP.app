import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, ManyToOne } from "typeorm";
import {VerificationTarget} from "../types/types";
import { type } from "os";
import User from "./User";

const EMAIL = "EMAIL";
const PHONE = "PHONE";

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

    @ManyToOne(type => User, user => user.verification)
    user: User;


    @BeforeInsert()
    createKey(): void {
        if(this.target === PHONE) {
            this.key = Math.floor(Math.random() * 100000).toString();
        }else if(this.target === EMAIL){
            Math.random().toString(26).substr(2);
        }
    }

}

export default Verication;