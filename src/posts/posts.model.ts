// import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users';

interface IPostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, IPostCreationAttrs> {
  // @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  // @ApiProperty({ example: 'test@test.test', description: 'Эл почта' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  title: string;

  // @ApiProperty({ example: '123', description: 'Пароль' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  // @ApiProperty({ example: '123', description: 'Изображение' })
  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
