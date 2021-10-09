import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime.js';

dayjs.extend(RelativeTime);

/**
 * Format current date as relative time from now
 * @returns {string} current date as string formatted as relative time from now
 */
export function formatNow() {
  return dayjs(new Date()).fromNow();
}

export default {
  formatNow
};
