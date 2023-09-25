interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'End Customer'],
  tenantName: 'Company',
  applicationName: 'Uma Herbal Care',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read products', 'Create and manage cart', 'Read company information', 'Edit user information'],
  ownerAbilities: ['Manage company', 'Manage cart', 'Manage product', 'Manage user'],
  getQuoteUrl: 'https://app.roq.ai/proposal/9e4fbc1b-a028-4a60-b56d-05269b92b1b5',
};
