import { parseDate } from "./date";

// Parses the latest year/month from the date string
const getLatestTimestamp = (dateStr) => {
  if (!dateStr) return 0;

  const yearMatch = dateStr.match(/\d{4}/g);
  const monthMatch = dateStr.match(
    /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)/i
  );

  let year = 0;
  let month = 0;

  if (yearMatch) {
    year = Math.max(...yearMatch.map(Number));
  }

  if (monthMatch) {
    const months = [
      "jan", "feb", "mar", "apr", "may", "jun",
      "jul", "aug", "sep", "oct", "nov", "dec",
    ];
    month = months.indexOf(monthMatch[0].toLowerCase());
  }

  return new Date(year, month).getTime();
};

export const sortTimelineData = (items) => {
  return [...items].sort((a, b) => getLatestTimestamp(b.date) - getLatestTimestamp(a.date));
};

export const processTimeline = (items) => {
  const lanes = [];
  const itemsWithDates = items.map(item => ({ ...item, ...parseDate(item.date) }));

  itemsWithDates.sort((a, b) => a.start - b.start);

  itemsWithDates.forEach(item => {
    let placed = false;
    for (const lane of lanes) {
      if (lane.every(i => item.start >= i.end)) {
        lane.push(item);
        placed = true;
        break;
      }
    }
    if (!placed) {
      lanes.push([item]);
    }
  });

  return lanes;
};
