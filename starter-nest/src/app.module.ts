import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from "./users/users.module";
import {AuthService} from "./auth/auth.service";
import {AuthModule} from "./auth/auth.module";

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [
      AppService,
  ],
})
export class AppModule {}
