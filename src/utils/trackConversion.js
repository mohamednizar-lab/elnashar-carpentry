export const trackConversion = (url) => {
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    window.gtag_report_conversion(url)
  } else {
    window.location.href = url
  }
}
