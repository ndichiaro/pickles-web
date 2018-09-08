import { configuration } from '../configuration';

export const get = () => {
    return fetch(`${configuration.apiUrl}/pickletypes`)
            .then((response) => response.json())
            .catch((error) => {
                console.error(error);
            });
};