export interface InputBoxProps {
  iRef: React.RefObject<HTMLInputElement>;
  text?: string;
  type?: string;
  marginBottom?: string;
  iWidth?: string;
  iHeight?: string;
  bWidth?: string;
  onClick?: () => void;
}

export interface InputBoxButtonProps extends InputBoxProps {
  btnText: string;
}
