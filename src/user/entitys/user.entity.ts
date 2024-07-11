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

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
  role: UserRole;
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
