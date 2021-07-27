export interface InputBoxProps {
  text: string;
  iRef: React.RefObject<HTMLInputElement>;
  type?: string;
  marginBottom?: string;
  iWidth?: string;
  iHeight?: string;
}

export interface InputBoxButtonProps extends InputBoxProps {
  btnText: string;
}
