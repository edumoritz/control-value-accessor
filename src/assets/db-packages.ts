const packages = [
  { id: 1, name: 'Silver' },
  { id: 2, name: 'Bronze' },
  { id: 3, name: 'Platinum' },
];

export function databasePackage(search: string): any[] {
  const result = packages
    .filter(({ name }) =>
      name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    )
    .map(({ name, id }) => id + ' - ' + name);

  return result;
}
