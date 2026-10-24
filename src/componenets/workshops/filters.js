export const DEFAULT_FILTERS = { classNum: 'all', subject: 'all', status: 'all' };

// Today's session counts as upcoming for filtering: it has not happened yet.
export const matchesFilters = (workshop, status, filters) =>
    (filters.classNum === 'all' || workshop.classes.includes(filters.classNum)) &&
    (filters.subject === 'all' || workshop.subject === filters.subject) &&
    (filters.status === 'all' || (filters.status === 'completed' ? status === 'completed' : status !== 'completed'));
