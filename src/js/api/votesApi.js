import { configuration } from '../configuration';

export const save = (vote) => {
    return fetch(`${configuration.apiUrl}/votes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(vote)
    });
};

export const get = () => {
    return fetch(`${configuration.apiUrl}/votes`)
            .then((response) => response.json());
};