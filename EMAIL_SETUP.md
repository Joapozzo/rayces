# Configuración de Email con Resend

Este proyecto usa **Resend** para enviar emails desde el formulario de contacto a `mueblesrayces@gmail.com`.

## 📋 Pasos para configurar

### 1. Crear cuenta en Resend

1. Ve a [https://resend.com](https://resend.com)
2. Regístrate con tu email
3. Verifica tu cuenta

### 2. Obtener API Key

1. Ve al dashboard de Resend
2. Click en "API Keys" en el menú lateral
3. Click en "Create API Key"
4. Dale un nombre (ej: "Rayces Production")
5. Copia la API key (empieza con `re_`)

### 3. Configurar variables de entorno

#### Desarrollo local:
1. Crea un archivo `.env.local` en la raíz del proyecto:
```bash
RESEND_API_KEY=re_tu_api_key_aqui
```

#### En Vercel:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_tu_api_key_aqui`
   - **Environment**: Production, Preview, Development
4. Click "Save"

### 4. Instalar dependencias

```bash
npm install resend
```

### 5. Verificar dominio (Opcional pero recomendado)

Con la cuenta gratuita, los emails se enviarán desde `onboarding@resend.dev`. Para usar tu propio dominio:

1. En Resend dashboard, ve a "Domains"
2. Click "Add Domain"
3. Ingresa tu dominio de Vercel o dominio personalizado
4. Sigue las instrucciones para agregar los registros DNS
5. Una vez verificado, actualiza el archivo `/src/app/api/contact/route.ts`:
   ```typescript
   from: 'Rayces Muebles <contacto@tudominio.com>',
   ```

## 🧪 Probar el envío

### En desarrollo:
```bash
npm run dev
```
Luego ve a http://localhost:3000 y prueba el formulario de contacto.

### En producción:
Después de hacer deploy en Vercel, el formulario enviará emails reales a `mueblesrayces@gmail.com`.

## ✅ Límites del plan gratuito de Resend

- ✅ 3,000 emails/mes GRATIS
- ✅ 100 emails/día
- ✅ Perfecto para un sitio de muebles

## 📧 Qué hace el sistema

1. Usuario completa el formulario en la página
2. Se valida con Zod
3. Se envía POST a `/api/contact`
4. La API usa Resend para enviar el email a `mueblesrayces@gmail.com`
5. El email incluye:
   - Nombre del cliente
   - Email del cliente (para responder)
   - Teléfono
   - Mensaje
6. Usuario recibe confirmación visual

## 🔧 Archivos importantes

- `/src/app/api/contact/route.ts` - API route para enviar emails
- `/src/app/components/Contact.tsx` - Formulario de contacto
- `.env.local` - Variables de entorno (NO subir a Git)
- `.env.example` - Ejemplo de variables de entorno

## ⚠️ Importante

- **NO subas el archivo `.env.local` a Git** (ya está en .gitignore)
- La API key es secreta, nunca la compartas públicamente
- Los emails llegarán a la bandeja de entrada de Gmail

## 🎨 Template de email

El email que llega a Gmail tiene:
- Header verde con gradiente (colores de Rayces)
- Campos bien organizados
- Botón directo para responder al cliente
- Diseño responsive

## 🐛 Troubleshooting

**Error: "RESEND_API_KEY is not defined"**
- Asegúrate de tener el `.env.local` con la API key
- Reinicia el servidor de desarrollo

**Los emails no llegan:**
- Verifica que la API key sea correcta
- Revisa la carpeta de spam en Gmail
- Verifica los logs en Resend dashboard

**Error 429 (Too Many Requests):**
- Superaste el límite de 100 emails/día
- Espera 24 horas o upgrade a plan de pago

## 📞 Soporte

Si tienes problemas:
1. Revisa la documentación de Resend: https://resend.com/docs
2. Verifica los logs en Vercel
3. Contacta soporte de Resend
