// import { UserRole } from 'src/enums/user-role.enum';
// import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
// import { FacebookPost } from 'src/facebook-page/entitys/facebook-posts.entity';
// import { RootAccount } from 'src/root-account/entitys/root-account.entity';
// import {
//   Entity,
//   PrimaryGeneratedColumn,
//   Column,
//   CreateDateColumn,
//   DeleteDateColumn,
//   OneToMany,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity()
// export class UserEntity {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column({ unique: true })
//   username: string;

//   @Column()
//   password: string;

//   @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
//   role: UserRole;
//   @CreateDateColumn()
//   createdAt: Date;

//   @UpdateDateColumn()
//   updatedAt: Date;

//   @DeleteDateColumn()
//   deletedAt: Date;
//   @OneToMany(() => FacebookPost, (post) => post.user)
//   posts: FacebookPost[];

//   @OneToMany(() => RootAccount, (rootAccount) => rootAccount.user)
//   rootAccounts: RootAccount[];
//   @OneToMany(() => FacebookPage, (facebookPage) => facebookPage.user)
//   facebookPages: FacebookPage[];
// }

import { UserRole } from 'src/enums/user-role.enum';
import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
import { FacebookPost } from 'src/facebook-page/entitys/facebook-posts.entity';
import { RootAccount } from 'src/root-account/entitys/root-account.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true, nullable: true })
  username: string;

  @Column({ nullable: true })
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  profilePictureUrl: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ type: 'date', nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  address: string;

  @Column({ type: 'text', nullable: true })
  bio: string;

  @Column({ type: 'timestamp', nullable: true })
  lastLogin: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => FacebookPost, (post) => post.user)
  posts: FacebookPost[];

  @OneToMany(() => RootAccount, (rootAccount) => rootAccount.user)
  rootAccounts: RootAccount[];

  @OneToMany(() => FacebookPage, (facebookPage) => facebookPage.user)
  facebookPages: FacebookPage[];
}
