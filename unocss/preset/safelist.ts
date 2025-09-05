export function getSafelist(options: { prefix?: string } = {}) {
  const prefix = options.prefix ?? '';

  return [
    `${prefix}items-end`,
    `${prefix}items-center`,
    `${prefix}items-start`,
    `${prefix}items-stretch`,
    `${prefix}items-baseline`,
    ...Array.from({ length: 16 }, (_, i) => `${prefix}gap-${i + 1}`),
    ...Array.from({ length: 16 }, (_, i) => `sm:${prefix}gap-${i + 1}`),
    ...Array.from({ length: 16 }, (_, i) => `md:${prefix}gap-${i + 1}`),
    ...Array.from({ length: 16 }, (_, i) => `lg:${prefix}gap-${i + 1}`),
    ...Array.from({ length: 16 }, (_, i) => `xl:${prefix}gap-${i + 1}`),
    ...Array.from({ length: 16 }, (_, i) => `${prefix}my-${i + 2}`),
    ...Array.from({ length: 16 }, (_, i) => `sm:${prefix}my-${i + 2}`),
    ...Array.from({ length: 12 }, (_, i) => `${prefix}grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `sm:${prefix}grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `md:${prefix}grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `lg:${prefix}grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `xl:${prefix}grid-cols-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `${prefix}col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `sm:${prefix}col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `md:${prefix}col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `lg:${prefix}col-span-${i + 1}`),
    ...Array.from({ length: 12 }, (_, i) => `xl:${prefix}col-span-${i + 1}`)
  ];
}
