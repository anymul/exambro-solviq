// Public Board Pe Charcha registration call. Goes to the exambro-api server through the same /api proxy as the rest of the site.
// Unlike services/api.js there is no simulated fallback: a registration either reached the server or it did not.

const ENDPOINT = '/api/v1/workshops/registrations';

export class RegistrationError extends Error {
    constructor(message, fieldErrors = {}) {
        super(message);
        this.fieldErrors = fieldErrors;
    }
}

export async function registerForWorkshop(payload) {
    let res;
    try {
        res = await fetch(ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: AbortSignal.timeout(15000)
        });
    } catch {
        throw new RegistrationError('We could not reach the server. Check your connection and try again.');
    }

    let body = null;
    try {
        body = await res.json();
    } catch {
        // non-JSON error page from a proxy
    }

    if (res.ok && body?.success) return body.data;
    if (res.status === 429) throw new RegistrationError(body?.message || 'Too many attempts. Please wait a few minutes and try again.');
    throw new RegistrationError(
        res.status === 400 && body?.message ? body.message : 'Something went wrong on our side. Please try again in a moment.',
        body?.fieldErrors || {}
    );
}
