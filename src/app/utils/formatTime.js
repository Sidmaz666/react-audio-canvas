export default function formatTime(input) {
    if (typeof input !== 'number' || isNaN(input)) {
        throw new Error('Invalid input: Please provide a numeric value.');
    }
    if (input < 0) {
        throw new Error('Invalid input: Time cannot be negative.');
    }

    const seconds = Math.floor(input);

    if (seconds < 60) {
        return `${seconds}s`;
    } else if (seconds < 3600) { 
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return remainingSeconds > 0 ? `${minutes}m ${remainingSeconds}s` : `${minutes}m`;
    } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        const remainingMinutes = Math.floor((seconds % 3600) / 60);
        return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
    } else { 
        const days = Math.floor(seconds / 86400);
        const remainingHours = Math.floor((seconds % 86400) / 3600);
        return remainingHours > 0 ? `${days}d ${remainingHours}h` : `${days}d`;
    }
}
