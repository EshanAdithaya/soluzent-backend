import { FacebookPage } from 'src/facebook-page/entitys/facebook-page.entity';
import { FacebookPost } from 'src/facebook-page/entitys/facebook-posts.entity';
import { UserEntity } from 'src/user/entitys/user.entity';
import { YoutubeChannel } from 'src/youtube-channel/entitys/youtube-channel.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class RootAccount {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    // type: 'String',
    // enum: SocialMediaPlatform,
  })
  platform: string; // e.g., Facebook, Instagram, TikTok

  @Column({ nullable: true })
  accountId: string;

  // @Column({ nullable: true })
  // profileUrl: string;

  @Column({ nullable: true })
  accountName: string;

  @Column({ type: 'varchar', length: 400, nullable: true })
  accessToken: string;

  @Column({ nullable: true })
  refreshToken: string;

  @Column({ nullable: true })
  fbProfileUrl: string;

  @Column({ nullable: true })
  expiresIn: number;

  @Column({ nullable: true })
  email: string;
  @Column({ nullable: true, default: false })
  pageLinked: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
  @OneToMany(() => FacebookPost, (post) => post.rootAccount)
  posts: FacebookPost[];

  @ManyToOne(() => UserEntity, (user) => user.rootAccounts, { nullable: true })
  user: UserEntity;

  @OneToMany(
    () => YoutubeChannel,
    (youtubeChannel) => youtubeChannel.rootAccount,
    { nullable: true },
  )
  youtubeChannels: YoutubeChannel[];

  @OneToMany(() => FacebookPage, (page) => page.rootAccount, { nullable: true })
  pages: FacebookPage[];
}
