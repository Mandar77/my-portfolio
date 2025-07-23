import { parseDate } from "./date";

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
