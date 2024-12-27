import { Injectable } from '@nestjs/common';
import { createTransport, Transporter} from 'nodemailer';

@Injectable()
export class EmailService {

    transporter: Transporter
    
    constructor() {
        this.transporter = createTransport({
            host: "smtp.qq.com",
            port: 587,
            secure: false,
            auth: {
                user: '377944878@qq.com',
                pass: 'gkaxxiofvlwbbhjf'
            },
        });
    }

    async sendMail({ to, subject, html }) {
      await this.transporter.sendMail({
        from: {
          name: '会议系统',
          address: '377944878@qq.com'
        },
        to,
        subject,
        html
      });
    }
}
