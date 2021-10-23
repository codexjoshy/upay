export const TOKEN_KEY = 'TOKEN';

export function getRoles(role) {
    let data = {
        admin: [{ title: 'State Government', value: 'state' },],
        state: [
            { title: 'Union', value: 'union' },
            { title: 'Agent', value: 'agent' },
            { title: 'Local Government', value: 'local' },
        ],
        local: [
            { title: 'Union', value: 'union' },
            { title: 'Agent', value: 'agent' }
        ],
        union: [
            { title: 'Agent', value: 'agent' },
            { title: 'Agent', value: 'agent' }
        ],
        agent: [
            { title: 'Collector', value: 'collector' }
        ],
    }
    return data[role] ?? [];
}