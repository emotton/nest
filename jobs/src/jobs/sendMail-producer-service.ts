import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
import { CreateUserDTO } from "src/create-user/create-user-dto";

@Injectable()
class SendMailProducerService {

    constructor(@InjectQueue('email-queue') private queue: Queue){}

    async sendMail(createUserDTO: CreateUserDTO){
        await this.queue.add("sendMail-job", createUserDTO, {
            // removeOnComplete: true
        });
    }
    
}

export { SendMailProducerService }