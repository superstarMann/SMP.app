import { Entity, Column,BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne} from "typeorm";
import Chat from "./Chat";
import User from "./User";

@Entity()

class Message extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    text: string

    @ManyToOne(type => Chat, chat => chat.messages)
    chat:Chat;

    @OneToMany(type => User, user => user.messages)
    user: User;

    @CreateDateColumn()
    createAt: string;

    @UpdateDateColumn()
    updateAt: string;
}

export default Message;