import { UserEntity } from 'src/user/entitys/user.entity';
import { RootAccount } from 'src/root-account/entitys/root-account.entity';
import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class FacebookPost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;
  @Column()
  facebookPostId: string;

  @Column({ type: 'simple-array', nullable: true })
  imageUrls: string[]; // Array of image URLs

  @Column({ type: 'simple-array', nullable: true })
  videoUrls: string[]; // Array of video URLs

  @Column({ nullable: true })
  scheduledAt: Date; // Date and time when the post is scheduled to be published

  @Column({ nullable: true })
  status: string; // Status of the post (e.g., scheduled, published, draft)

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  user: UserEntity;

  @ManyToOne(() => RootAccount, (rootAccount) => rootAccount.posts)
  rootAccount: RootAccount;

  @ManyToOne(() => FacebookPage, (page) => page.posts)
  page: FacebookPage;
}
