// Performance monitoring utilities
export class PerformanceTracker {
  private static instance: PerformanceTracker;
  private metrics: Map<string, number[]> = new Map();

  private constructor() {
    if (typeof window !== 'undefined') {
      this.setupPerformanceObserver();
    }
  }

  static getInstance(): PerformanceTracker {
    if (!PerformanceTracker.instance) {
      PerformanceTracker.instance = new PerformanceTracker();
    }
    return PerformanceTracker.instance;
  }

  private setupPerformanceObserver() {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        this.recordMetric(entry.name, entry.duration);
      });
    });

    observer.observe({ entryTypes: ['measure', 'paint', 'largest-contentful-paint'] });
  }

  recordMetric(name: string, value: number) {
    const current = this.metrics.get(name) || [];
    current.push(value);
    this.metrics.set(name, current.slice(-100)); // Keep last 100 entries
  }

  getMetricAverage(name: string): number {
    const values = this.metrics.get(name) || [];
    if (values.length === 0) return 0;
    return values.reduce((a, b) => a + b, 0) / values.length;
  }

  // Core Web Vitals Monitoring
  static monitorCoreWebVitals() {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ onCLS, onFID, onLCP }) => {
        onCLS(console.log);
        onFID(console.log);
        onLCP(console.log);
      });
    }
  }
}

// Image optimization utility
export function getOptimizedImage(src: string, options: {
  width?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg';
} = {}) {
  const { width = 1200, quality = 85, format = 'webp' } = options;
  
  // In production, use a real image CDN
  if (process.env.NODE_ENV === 'production') {
    return `https://cdn.akash.io/${src}?w=${width}&q=${quality}&format=${format}`;
  }
  
  return src;
}

// Lazy loading with Intersection Observer
export function setupLazyLoading() {
  if (typeof window === 'undefined') return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
        }
        observer.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });

  document.querySelectorAll('img[data-src]').forEach((img) => {
    observer.observe(img);
  });
}
