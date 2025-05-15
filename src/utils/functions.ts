export function formatValueByCurrency(value: number): string {
  try {
    return `R$ ${(isNaN(value) ? 0 : value / 100).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
    })}`;
  } catch {
    return 'R$ 0,00';
  }
}
