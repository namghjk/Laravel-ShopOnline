export const formatNumber = (
  num: number | undefined,
  fixed: number,
  shorten?: boolean
) => {
  if (!num) {
    return '0';
  }
  if (!shorten) {
    return num.toFixed(fixed).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  } else {
    if (num < 1e3) return num + ' ';
    if (num >= 1e3 && num < 1e6) return +(num / 1e3).toFixed(1) + 'K';
    if (num >= 1e6 && num < 1e9) return +(num / 1e6).toFixed(1) + 'M';
    if (num >= 1e9 && num < 1e12) return +(num / 1e9).toFixed(1) + 'B';
    if (num >= 1e12) return +(num / 1e12).toFixed(1) + 'T';
  }
};
