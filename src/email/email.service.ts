import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      service: 'qq',
      port: 465,
      secureConnection: true,
      auth: {
        user: '377944878@qq.com',
        pass: 'hvwyauborwebbgga',
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '会议预定系统',
        address: '377944878@qq.com',
      },
      to,
      subject,
      html,
    });
  }
}
