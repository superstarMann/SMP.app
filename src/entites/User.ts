import bcrypt, { hash } from "bcrypt";
import { BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, BeforeInsert, BeforeUpdate, ManyToOne, OneToMany } from "typeorm";
import {IsEmail} from "class-validator";
import Chat from "./Chat";
import Message from "./Message";
import Verification from "./Verification";
import Ride from "./Ride";

const BCRYPT_ROUNDS = 20;

@Entity()

class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: "text"})
    password: string;

    @Column({type: "text"})
    firstName: string;

    @Column({type: "text"})
    lastName: string;

    get FullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    @Column({type: "text"})
    PhoneNumber: string;

    @Column({type: "boolean", default: false})
    verifiedPhoneNumber: boolean;

    @Column({type: "text", unique: true})
    @IsEmail()
    Email: string;

    @Column({type: "boolean", default: false})
    verifiedEmail: boolean;

    @Column({type: "text"})
    age: number;

    @Column({type: "text"})   
    ProfilePhoto: string

    @Column({type:"boolean", default: false})
    isDriving: boolean;

    @Column({type: "boolean", default: false})
    isRiding: boolean;

    @Column({type: "boolean", default: false})
    isTaken: boolean;

    @Column({type: "double precision", default: 0})
    lastLng: number;

    @Column({type: "double precision", default: 0})
    lastLat: number;

    @Column({type: "double precision", default: 0})
    lastOrientation: number;

    @CreateDateColumn() createAt: string;
    @UpdateDateColumn() updateAt: string;
    
    @ManyToOne(type => Chat, chat => chat.participants)
    chat: Chat;

    @OneToMany(type => Message, message => message.user)
    messages: Message[];

    @OneToMany(type => Verification, verification => verification.user)
    verification: Verification[];

    @OneToMany(type => Ride, ride => ride.passenger)
    ridesAsPassenger: Ride[];

    @OneToMany(type => Ride, ride => ride.driver)
    ridesAsDriver: Ride[];

    public comparepassword(password: string): Promise<boolean> {
         return bcrypt.compare(password, this.password);
    }

    @BeforeInsert()    
    @BeforeUpdate()
    async savePassword() : Promise<void> {
        if(this.password) {
             const hashedPassword = await this.hashPassword(this.password);
             this.password = hashedPassword;
        }
    }
        private hashPassword(password: string): Promise<string> {
         return bcrypt.hash(password, BCRYPT_ROUNDS);
    }
 }    

export default User;