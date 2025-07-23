export const parseDate = (dateString) => {
  if (dateString.includes('Expected')) {
    const year = parseInt(dateString.split(' ')[2]);
    return { start: new Date(year, 0, 1), end: new Date(year, 11, 31) };
  }

  if (dateString.includes('–')) {
    const [start, end] = dateString.split('–').map(s => s.trim());
    const startMonth = new Date(Date.parse(start.split(' ')[0] +" 1, 2012")).getMonth();
    const startYear = parseInt(start.split(' ')[1]);
    const endMonth = new Date(Date.parse(end.split(' ')[0] +" 1, 2012")).getMonth();
    const endYear = parseInt(end.split(' ')[1]);
    return { start: new Date(startYear, startMonth, 1), end: new Date(endYear, endMonth, 1) };
  }

  const year = parseInt(dateString);
  return { start: new Date(year, 0, 1), end: new Date(year, 11, 31) };
};
