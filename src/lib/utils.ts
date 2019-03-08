export function mapSubsToColours(sub: string): string {
  switch (sub.replace('r/', '').toLowerCase()) {
    case 'css':
      return 'one';
    case 'webdev':
      return 'two';
    case 'web_design':
      return 'three';
    case 'typescript':
      return 'four';
    case 'javascript':
      return 'five';
    case 'frontend':
      return 'six';
    case 'graphql':
      return 'seven';
    case 'reactjs':
      return 'eight';
    case 'nodejs':
      return 'nine';
    default:
      return 'one';
  }
}

export function getHostname(url: string): string {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
  return match[2];
}

export function numCommentsText(numComments: number): string {
  return numComments === 1
    ? `${numComments} comment`
    : `${numComments} comments`;
}

/**
 * Convert the UNIX timestamp provided by the API into human-readable format
 */
export function getTimeAgo(timestamp: number): string {
  const d = new Date();
  // Convert the passed timestamp to milliseconds
  const tNowS = Math.floor(d.getTime() / 1000);
  const seconds = tNowS - timestamp;
  const mins = Math.floor(seconds / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(seconds / 3600 / 24);

  if (days >= 8) {
    return 'A week ago';
  } else if (seconds > 2 * 24 * 3600) {
    return Math.floor(days) + 'd ago';
  } else if (seconds > 24 * 3600) {
    return 'Yesterday';
  } else if (mins > 60) {
    return hours + 'h ago';
  } else if (2 < mins < 60) {
    return mins + 'm ago';
  } else {
    return mins + 'Just now';
  }
}
