import { RootAccount } from 'src/root-account/entitys/root-account.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class YoutubeChannel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  channelId: string;

  @Column()
  channelName: string;

  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;

  @Column()
  expiresIn: number; // expiration time for access token

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => RootAccount, (rootAccount) => rootAccount.youtubeChannels)
  rootAccount: RootAccount;
}
