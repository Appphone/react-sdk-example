class SessionStore {
    constructor() {
        this.sessions = new Map();
    }

    findSession(id) {
        return this.sessions.get(id);
    }

    saveSession(id, session) {
        const currentSessionData = this.findSession(id) || {};
        this.sessions.set(id, { ...currentSessionData, ...session });
    }

    findAllSessions() {
        return [...this.sessions.values()];
    }
}

module.exports = SessionStore;
