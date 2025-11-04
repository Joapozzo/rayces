import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

// Schema de validación
const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(8),
    message: z.string().min(10)
});

// Inicializar Resend con la API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        // Parsear el body
        const body = await request.json();

        // Validar los datos
        const validationResult = contactSchema.safeParse(body);
        if (!validationResult.success) {
            return NextResponse.json(
                { error: 'Datos inválidos', details: validationResult.error.issues },
                { status: 400 }
            );
        }

        const { name, email, phone, message } = validationResult.data;

        // Enviar el email usando Resend
        const { data, error: resendError } = await resend.emails.send({
            from: 'Rayces Muebles <onboarding@resend.dev>',
            to: ['pozzojoa@gmail.com'],
            replyTo: email,
            subject: `Nueva consulta de ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .header {
                            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                            color: white;
                            padding: 30px;
                            border-radius: 10px 10px 0 0;
                            text-align: center;
                        }
                        .content {
                            background: #f9fafb;
                            padding: 30px;
                            border-radius: 0 0 10px 10px;
                        }
                        .field {
                            margin-bottom: 20px;
                            padding: 15px;
                            background: white;
                            border-radius: 8px;
                            border-left: 4px solid #10b981;
                        }
                        .label {
                            font-weight: 600;
                            color: #059669;
                            font-size: 14px;
                            text-transform: uppercase;
                            letter-spacing: 0.5px;
                            margin-bottom: 5px;
                        }
                        .value {
                            color: #1f2937;
                            font-size: 16px;
                        }
                        .message-box {
                            background: white;
                            padding: 20px;
                            border-radius: 8px;
                            border: 1px solid #e5e7eb;
                            margin-top: 20px;
                            white-space: pre-wrap;
                        }
                        .footer {
                            text-align: center;
                            color: #6b7280;
                            font-size: 12px;
                            margin-top: 30px;
                            padding-top: 20px;
                            border-top: 1px solid #e5e7eb;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1 style="margin: 0; font-size: 28px;">Nueva Consulta</h1>
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">Rayces Muebles</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">Nombre</div>
                            <div class="value">${name}</div>
                        </div>

                        <div class="field">
                            <div class="label">Email</div>
                            <div class="value"><a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></div>
                        </div>

                        <div class="field">
                            <div class="label">Teléfono</div>
                            <div class="value">${phone}</div>
                        </div>

                        <div class="field">
                            <div class="label">Mensaje</div>
                            <div class="message-box">${message}</div>
                        </div>

                        <div class="footer">
                            <p style="background: #fef3c7; padding: 10px; border-radius: 8px; color: #92400e; margin-bottom: 15px;">
                                <strong>⚠️ IMPORTANTE:</strong> Este email debe ser reenviado a <strong>mueblesrayces@gmail.com</strong>
                            </p>
                            <p>Este mensaje fue enviado desde el formulario de contacto de rayces.com</p>
                            <p style="margin-top: 10px;">
                                <a href="mailto:${email}?subject=Re: Tu consulta en Rayces" style="color: #10b981; text-decoration: none;">
                                    Responder directamente a ${name}
                                </a>
                            </p>
                        </div>
                    </div>
                </body>
                </html>
            `
        });

        if (resendError || !data) {
            console.error('Error de Resend:', resendError);
            return NextResponse.json(
                { error: 'Error al enviar el email', details: resendError },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, messageId: data.id },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error enviando email:', error);
        return NextResponse.json(
            { error: 'Error al enviar el mensaje. Por favor intenta nuevamente.' },
            { status: 500 }
        );
    }
}
