export function formatPrice(price: number): string {
  const priceParts = price.toFixed(2).split(".");
  priceParts[0] = priceParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return priceParts.join(".");
}
