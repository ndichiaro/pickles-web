import { configuration } from '../configuration';

export const get = () => {
    return fetch(`${configuration.apiUrl}/picklestyles`)
            .then((response) => response.json());
};