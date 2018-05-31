export function configure(config) {
  config.globalResources([
    './value-converters/order-by',
    './value-converters/group-by',
    './value-converters/filter-by'
  ]);
}
