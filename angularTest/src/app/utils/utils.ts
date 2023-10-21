export function convertCurrency(value: number): string {
  const formattedValue = value.toFixed(2);
  let result = parseFloat(formattedValue).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
return result;
} 
