// Global type declarations for custom elements and third-party globals

declare namespace JSX {
  interface IntrinsicElements {
    'lottie-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      src?: string;
      background?: string;
      speed?: string | number;
      loop?: boolean;
      autoplay?: boolean;
      style?: React.CSSProperties;
      id?: string;
    }, HTMLElement>;
    'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      url?: string;
      background?: string;
    }, HTMLElement>;
  }
}

interface Window {
  ChatbotBuilder?: { open: () => void };
  openPopup?: (id: string) => void;
  closePopup?: () => void;
  gsap?: any;
  ScrollTrigger?: any;
}
