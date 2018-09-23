import configuration from '../configuration.json';

export const get = () => {
    return fetch(`${configuration.apiUrl}/pickletypes`)
            .then((response) => response.json());
};