import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO_LOCAL), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
