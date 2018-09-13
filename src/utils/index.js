import dateFormat from 'date-format';

// 设置网页的标题
export function setDocumentTitle (title) {
  document.title = title;
}

// 金额转换（分转成元）
export function getShowPrice (price) {
  const _price = ((price / 100) + '').indexOf('.') > -1 ? (price / 100).toFixed(2) : (price / 100);
  return _price || 0;
}

// 格式化时间至秒
export function formatToTime(timeStramp) {
  if (!timeStramp && typeof timeStramp !== 'number') return '';
  return dateFormat('yyyy-MM-dd hh:mm:ss', new Date(timeStramp));
}