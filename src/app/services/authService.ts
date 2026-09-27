// app/services/authService.ts
let activeCodes: Record<string, { code: string; expiresAt: number }> = {};

export const secureAuthService = {
  generateCode: (identifier: string) => {
    const code = Math.floor(10000000 + Math.random() * 90000000).toString();
    const expiresAt = Date.now() + 120 * 1000;
    activeCodes[identifier] = { code, expiresAt };
    return { success: true, message: `[SMS OTP] Código de 8 dígitos enviado al celular ${identifier}. Válido por 120 segundos.` };
  },
  verifyCode: (identifier: string, enteredCode: string) => {
    const record = activeCodes[identifier];
    if (!record) return { valid: false, message: 'Alerta: No hay código activo o ha expirado.' };
    if (Date.now() > record.expiresAt) {
      delete activeCodes[identifier];
      return { valid: false, message: 'El código ha expirado (Límite crítico de 120 segundos superado).' };
    }
    if (record.code !== enteredCode) {
      return { valid: false, message: 'Código de verificación incorrecto.' };
    }
    delete activeCodes[identifier];
    return { valid: true, message: '¡Verificación móvil exitosa! Acceso autorizado.' };
  }
};