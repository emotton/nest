import { MailerService } from "@nestjs-modules/mailer";
import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { CreateUserDTO } from "src/create-user/create-user-dto";

@Processor("email-queue")
class SendMailConsumer {

    constructor(private mailService: MailerService){}

    @Process("sendMail-job")
    async sendMailJob(job: Job<CreateUserDTO>){
        const {data} = job;
        await this.mailService.sendMail({
            to: data.email,
            from: "Eduardo Motton <emotton@gmail.com>",
            subject: "Seja bem vindo(a)!",
            text: `Olá ${data.name}, seu cadastro foi realizado com sucesso !`
        });
    }
}

export { SendMailConsumer }