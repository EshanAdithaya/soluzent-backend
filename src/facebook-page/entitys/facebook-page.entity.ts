import { RootAccount } from 'src/root-account/entitys/root-account.entity';
import { UserEntity } from 'src/user/entitys/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { FacebookPost } from './facebook-posts.entity';

@Entity()
export class FacebookPage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  pageId: string;

  @Column()
  pageName: string;

  @Column({ nullable: true }) // Make accessToken nullable
  accessToken: string;

  @Column({ nullable: true }) // Make refreshToken nullable
  refreshToken: string;

  @Column({ nullable: true }) // Make isActive nullable
  isActive: boolean;

  @Column({ nullable: true }) // Make expiresIn nullable
  expiresIn: number; // expiration time for access token

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
  @OneToMany(() => FacebookPost, (post) => post.page)
  posts: FacebookPost[];

  @ManyToOne(() => RootAccount, (rootAccount) => rootAccount.pages)
  rootAccount: RootAccount;
  @ManyToOne(() => UserEntity, (user) => user.facebookPages) // Add this line to create the direct relationship
  user: UserEntity;
}
