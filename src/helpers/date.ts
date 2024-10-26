export function formatarDataYMD(date = new Date()) {
  const newDate = new Date(date);
  const year = newDate?.getFullYear();
  const month = String(newDate?.getMonth() + 1).padStart(2, '0');
  const day = String(newDate?.getDate()).padStart(2, '0');

  return `${year}/${month}/${day}`;
}

export function formatarHora(date = new Date()) {
  const newDate = new Date(date);
  const horas = newDate?.getHours().toString().padStart(2, '0');
  const minutos = newDate?.getMinutes().toString().padStart(2, '0');
  return `${horas}:${minutos}`;
}

export function dateGreaterThan(date1: Date, date2: Date) {
  return date1.getTime() > date2.getTime();
}

export function dateLessThan(date1: Date, date2: Date) {
  return date1.getTime() < date2.getTime();
}

export function dateIsValid(date?: string | Date | null) {
  const newDate = new Date(date).getTime();
  return !isNaN(newDate);
}
