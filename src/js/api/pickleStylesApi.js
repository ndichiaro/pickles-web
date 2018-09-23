import configuration from '../configuration.json';

export const get = () => {
    return fetch(`${configuration.apiUrl}/picklestyles`)
            .then((response) => response.json());
};