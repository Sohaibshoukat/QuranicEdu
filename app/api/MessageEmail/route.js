import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message} = await request.json();


    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'sohaibshoukat94@gmail.com', // Your Gmail email address
        pass: 'wykgmnowgsxjvrtu', // Your Gmail app password or an app-specific password
      },
    }
    );

    const mailOptions = {
      from: email,
      to: 'qarikhalid.quranicedu@gmail.com',
      subject: `${name} Message`,
      text: `${message}`,
    };
    await transporter.sendMail(mailOptions);


    return NextResponse.json({ message: "Email Send Successfully", success: true }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Email Error", success: false }, { status: 500 });
  }
};
