import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

export async function POST(request) {
  try {
    const { name, email, gender, teacherGender, country, course } = await request.json();


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
      subject: `${course} Enrollment`,
      text: `Dear Quranic Edu,
      Please find the details below:

      - Name: ${name}
      - Email: ${email}
      - Gender: ${gender}
      - Country: ${country}
      - Teacher Gender: ${teacherGender}
      - Course: ${course}

      Looking forward to your Response.

      Best regards,
      ${name}`,
    };
    await transporter.sendMail(mailOptions);


    return NextResponse.json({ message: "Email Send Successfully", success: true }, { status: 200 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Email Error", success: false }, { status: 500 });
  }
};
