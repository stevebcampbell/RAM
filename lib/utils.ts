// Utility functions for the RandomAccessMind blog

export function cn(
  ...inputs: (string | Record<string, boolean> | undefined | null | false)[]
) {
  const classes: string[] = [];

  for (const input of inputs) {
    if (!input) continue;

    if (typeof input === 'string') {
      classes.push(input);
    } else if (typeof input === 'object') {
      for (const [key, value] of Object.entries(input)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }

  return classes.join(' ');
}

/**
 * Format a date for display
 */
export function formatDate(
  date: Date | string,
  formatStr: string = 'MMM dd, yyyy'
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Get relative time (e.g., "2 hours ago")
 */
export function getRelativeTime(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - dateObj.getTime()) / 1000);

  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;

  return formatDate(dateObj);
}

/**
 * Generate a URL slug from a title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
}

/**
 * Truncate text to a specified length
 */
export function truncateText(
  text: string,
  maxLength: number,
  suffix: string = '...'
): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Get FCL complexity level description
 */
export function getFCLDescription(fcl: number): string {
  if (fcl < 40) return 'Beginner Friendly';
  if (fcl < 50) return 'Easy to Follow';
  if (fcl < 60) return 'Intermediate';
  if (fcl < 70) return 'Advanced';
  if (fcl < 80) return 'Expert Level';
  if (fcl < 90) return 'Highly Technical';
  return 'Research Grade';
}

/**
 * Get FCL complexity color
 */
export function getFCLColor(fcl: number): string {
  if (fcl < 40) return 'text-green-600';
  if (fcl < 50) return 'text-green-500';
  if (fcl < 60) return 'text-yellow-500';
  if (fcl < 70) return 'text-orange-500';
  if (fcl < 80) return 'text-red-500';
  if (fcl < 90) return 'text-red-600';
  return 'text-purple-600';
}
