let activeCodes = {}; 

export const authCodeService = {
  generateCode: (identifier) => {
    const code = Math.floor(10000000 + Math.random() * 90000000).toString();
    const expiresAt = Date.now() + 90 * 1000; // Exactamente 90 segundos de vigencia
    
    activeCodes[identifier] = {
      code,
      expiresAt,
      attempts: 0
    };

    console.log(`[Alex Bakery AI-OS SMS Engine] Código de 8 dígitos para ${identifier}: ${code} (Válido por 90s)`);
    return { success: true, message: 'Código de 8 dígitos enviado vía Mensaje (Válido por 90s).' };
  },

  verifyCode: (identifier, enteredCode) => {
    const record = activeCodes[identifier];

    if (!record) {
      return { valid: false, message: 'No hay ningún código activo o ha expirado.' };
    }

    if (Date.now() > record.expiresAt) {
      delete activeCodes[identifier];
      return { valid: false, message: 'El código ha expirado (superó los 90 segundos). Solicite uno nuevo.' };
    }

    if (record.attempts >= 3) {
      delete activeCodes[identifier];
      return { valid: false, message: 'Demasiados intentos fallidos. Solicite un nuevo código.' };
    }

    if (record.code !== enteredCode) {
      record.attempts += 1;
      return { valid: false, message: `Código incorrecto. Intentos restantes: ${3 - record.attempts}` };
    }

    delete activeCodes[identifier];
    return { valid: true, message: '¡Verificación exitosa!' };
  }
};