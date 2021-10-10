const payments = [
  { id: 1, name: 'Cash' },
  { id: 2, name: 'Paypal' },
  { id: 3, name: 'Visa/Master Card' },
];

export function databasePayment(search: string): any[] {
  const result = payments
    .filter(({ name }) =>
      name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    .map(({ id, name }) => id + ' - ' + name);

  return result;
}
