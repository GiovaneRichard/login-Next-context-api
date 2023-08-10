export type IModalTypes = "WARNING" | "ERROR" | "SUCCESS" | "CONFIRM";

export interface IModalProps {
  title?: string;
  titleComplement?: string;
  description?: string;
  complementDescription?: string;
  complementDescription2?: string;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
  cancelText?: string;
  cancelType?: "button" | "reset" | "submit";
  okText?: string;
  okType?: "button" | "reset" | "submit";
  isOpen: boolean;
  type?: IModalTypes;
  body?: any;
}

export type IModalActions = "OK" | "CANCEL";
