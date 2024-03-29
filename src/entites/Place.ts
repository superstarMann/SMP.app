import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()

class Place extends BaseEntity{
   @PrimaryGeneratedColumn()
   id: number;

   @Column({type: "text"})
   name: string;

   @Column({type: "double precision", default: 0})
   lat: number;

   @Column({type: "double precision", default: 0})
   lng: number;

   @Column({type: "text"})
   adress: string;

   @Column({type: "boolean", default: false})
   isFav: boolean;

   @CreateDateColumn()
   createAt: string;

   @UpdateDateColumn()
   updateAt: string;
}

export default Place;