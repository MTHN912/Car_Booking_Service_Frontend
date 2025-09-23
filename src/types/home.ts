export type HomeFormProps = {
  onSearchByAddress: (address: string) => void;
  onRadiusChange: (radius: number) => void;
  radius: number;
};