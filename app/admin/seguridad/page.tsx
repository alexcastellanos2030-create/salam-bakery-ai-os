// lib/security/data-filter.ts

export function sanitizeDataForUser(data: any, userRole: string) {
  // Si eres TÚ (el Administrador), se entrega el 100% de la información sin restricciones
  if (userRole === 'SUPER_ADMIN') {
    return data;
  }

  // Si es un usuario común, el servidor ELIMINA automáticamente los datos sensibles
  const { 
    costosProduccion, 
    margenGanancia, 
    logsSeguridad, 
    clavesAPI, 
    permisosAdmin, 
    ...datosPermitidos 
  } = data;

  return datosPermitidos;
}