export interface InputBoxProps {
  iRef: React.RefObject<HTMLInputElement>;
  width?: string;
  text?: string;
  type?: string;
  marginBottom?: string;
  marginRight?: string;
  iWidth?: string;
  iHeight?: string;
  bWidth?: string;
  onClick?: () => void;
  disable?: boolean;
  dValue?: string;
  onlyNumber?: boolean;
}

export interface InputBoxButtonProps extends InputBoxProps {
  btnText: string;
}
