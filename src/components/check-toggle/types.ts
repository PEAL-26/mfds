export interface CheckToggleProps {
  active?: boolean;
  onChange?(state: boolean): void;
  confirmText?: string;
  afterConfirmedText?: string;
  cancelText?: string;
  afterCanceledText?: string;
}
