import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    private mongoUri: string;
  
    constructor(private configService: ConfigService) {
      this.mongoUri = this.configService.get('MONGO_URI');
    }
  
    createMongooseOptions(): MongooseModuleOptions {
      return {
        uri: this.mongoUri,
      };
    }
  }