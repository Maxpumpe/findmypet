
export const WORLDMAP_PAGE_INIT = 'WORLDMAP_PAGE_INIT';

export function worldMapPageInit(payload) {

    return {
        type: WORLDMAP_PAGE_INIT,
        payload
    };
}