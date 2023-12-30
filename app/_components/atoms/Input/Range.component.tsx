export interface RangeProps {
  min: number;
  max: number;
  value?: number;
}

export const Range = ({ min, max, value = 0 }: RangeProps) => {
  return (
    <input
      type='range'
      min={min}
      max={max}
      value={value}
      className='range range-primary'
    />
  );
};

