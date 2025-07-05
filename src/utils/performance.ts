// 性能监控工具

interface PerformanceMetrics {
  fcp?: number // First Contentful Paint
  lcp?: number // Largest Contentful Paint
  fid?: number // First Input Delay
  cls?: number // Cumulative Layout Shift
  ttfb?: number // Time to First Byte
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {}
  private observers: PerformanceObserver[] = []

  constructor() {
    this.initObservers()
  }

  // 初始化性能观察器
  private initObservers() {
    // 观察 FCP 和 LCP
    if ('PerformanceObserver' in window) {
      try {
        const paintObserver = new PerformanceObserver((list, observer) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.fcp = entry.startTime
              // 指标已捕获，停止观察以释放资源
              observer.disconnect()
              this.observers = this.observers.filter((o) => o !== observer)
            }
          }
        })
        paintObserver.observe({ entryTypes: ['paint'] })
        this.observers.push(paintObserver)

        // LCP 观察器
        const lcpObserver = new PerformanceObserver((list, observer) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1]
          this.metrics.lcp = lastEntry.startTime
          // LCP 一旦记录，停止观察
          observer.disconnect()
          this.observers = this.observers.filter((o) => o !== observer)
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
        this.observers.push(lcpObserver)

        // FID 观察器
        const fidObserver = new PerformanceObserver((list, observer) => {
          for (const entry of list.getEntries()) {
            this.metrics.fid = (entry as any).processingStart - entry.startTime
            // FID 只需记录一次即可
            observer.disconnect()
            this.observers = this.observers.filter((o) => o !== observer)
          }
        })
        fidObserver.observe({ entryTypes: ['first-input'] })
        this.observers.push(fidObserver)

        // CLS 观察器
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              this.metrics.cls = clsValue
            }
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        this.observers.push(clsObserver)
      } catch (error) {
        console.warn('Performance Observer not supported:', error)
      }
    }

    // 计算 TTFB
    this.calculateTTFB()
  }

  // 计算 TTFB
  private calculateTTFB() {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigationEntries = performance.getEntriesByType(
        'navigation',
      ) as PerformanceNavigationTiming[]
      if (navigationEntries.length > 0) {
        const entry = navigationEntries[0]
        this.metrics.ttfb = entry.responseStart - entry.requestStart
      }
    }
  }

  // 获取当前性能指标
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics }
  }

  // 记录自定义性能指标
  mark(name: string) {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(name)
    }
  }

  // 测量两个标记之间的时间
  measure(name: string, startMark: string, endMark?: string) {
    if ('performance' in window && 'measure' in performance) {
      try {
        if (endMark) {
          performance.measure(name, startMark, endMark)
        } else {
          performance.measure(name, startMark)
        }

        const measures = performance.getEntriesByName(name, 'measure')
        if (measures.length > 0) {
          return measures[measures.length - 1].duration
        }
      } catch (error) {
        console.warn('Performance measure failed:', error)
      }
    }
    return 0
  }

  // 获取页面加载时间
  getPageLoadTime(): number {
    if ('performance' in window && 'timing' in performance) {
      const timing = performance.timing
      return timing.loadEventEnd - timing.navigationStart
    }
    return 0
  }

  // 获取 DOM 解析时间
  getDOMParseTime(): number {
    if ('performance' in window && 'timing' in performance) {
      const timing = performance.timing
      return timing.domContentLoadedEventEnd - timing.domLoading
    }
    return 0
  }

  // 获取资源加载时间
  getResourceLoadTimes(): Array<{ name: string; duration: number; size?: number }> {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[]
      return resources.map((resource) => ({
        name: resource.name,
        duration: resource.responseEnd - resource.startTime,
        size: resource.transferSize,
      }))
    }
    return []
  }

  // 发送性能数据到分析服务
  sendMetrics(endpoint?: string) {
    const metrics = this.getMetrics()
    const additionalData = {
      pageLoadTime: this.getPageLoadTime(),
      domParseTime: this.getDOMParseTime(),
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
      url: window.location.href,
    }

    const data = { ...metrics, ...additionalData }

    // 如果提供了端点，发送到服务器
    if (endpoint) {
      this.sendToServer(endpoint, data)
    }

    // 发送到控制台（开发环境）
    if (import.meta.env.DEV) {
      console.group('🚀 Performance Metrics')
      console.table(data)
      console.groupEnd()
    }

    return data
  }

  // 发送数据到服务器
  private sendToServer(endpoint: string, data: any) {
    if ('sendBeacon' in navigator) {
      // 使用 sendBeacon API（推荐）
      navigator.sendBeacon(endpoint, JSON.stringify(data))
    } else {
      // 降级到 fetch
      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        keepalive: true,
      }).catch((error) => {
        console.warn('Failed to send performance metrics:', error)
      })
    }
  }

  // 清理观察器
  disconnect() {
    this.observers.forEach((observer) => observer.disconnect())
    this.observers = []
  }
}

// 创建全局实例
export const performanceMonitor = new PerformanceMonitor()

// 页面加载完成后发送指标
window.addEventListener('load', () => {
  // 延迟一段时间确保所有指标都被收集
  setTimeout(() => {
    performanceMonitor.sendMetrics()
  }, 1000)
})

// 页面卸载时发送最终指标
window.addEventListener('beforeunload', () => {
  performanceMonitor.sendMetrics()
  performanceMonitor.disconnect()
})

// 导出工具函数
export const measurePageLoad = () => {
  performanceMonitor.mark('page-start')

  return {
    end: () => {
      performanceMonitor.mark('page-end')
      return performanceMonitor.measure('page-load-time', 'page-start', 'page-end')
    },
  }
}

export const measureComponentRender = (componentName: string) => {
  const startMark = `${componentName}-render-start`
  const endMark = `${componentName}-render-end`

  performanceMonitor.mark(startMark)

  return {
    end: () => {
      performanceMonitor.mark(endMark)
      return performanceMonitor.measure(`${componentName}-render-time`, startMark, endMark)
    },
  }
}

// 防抖函数
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: number
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(null, args), wait)
  }
}

// 节流函数
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
