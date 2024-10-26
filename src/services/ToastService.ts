type ToastType = 'success' | 'danger' | 'info' | 'warning';
type ToastListener = (type: ToastType, message: string) => void;

class ToastService {
  private static listeners: ToastListener[] = [];

  static subscribe(listener: ToastListener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private static show(type: ToastType, message: string) {
    this.listeners.forEach(listener => listener(type, message));
  }

  static success(message: string) {
    this.show('success', message);
  }

  static error(message: string) {
    this.show('danger', message);
  }

  static info(message: string) {
    this.show('info', message);
  }

  static warning(message: string) {
    this.show('warning', message);
  }
}

export default ToastService;
