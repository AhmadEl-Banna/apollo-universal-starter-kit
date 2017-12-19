export enum ButtonSize {
  XS = 0,
  Small = 1,
  Default = 2,
  Large = 3
}

export enum ButtonStyle {
  Empty = 0,
  Default = 1,
  Primary = 2,
  Success = 3,
  Info = 4,
  Warning = 5,
  Danger = 6,
  Link = 7,
  Dashed = 8,
  Close = 9
}

export interface TypedValue {
  type: any;
  value: any;
}

export const findVal: (source: TypedValue[], val: any) => string = (source: TypedValue[], val: any) => {
  return source.find((item: any) => item.type === val).value;
};
