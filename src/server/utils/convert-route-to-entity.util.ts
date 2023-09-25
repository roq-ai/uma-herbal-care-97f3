const mapping: Record<string, string> = {
  carts: 'cart',
  companies: 'company',
  products: 'product',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
