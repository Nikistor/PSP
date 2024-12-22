import {accessToken, version} from "./consts.js";

class Urls {
    constructor() {
        this.url = 'https://api.vk.com/method'
        this.commonInfo = `access_token=${accessToken}&v=${version}`
    }

    getUserInfo(userId) {
        return `${this.url}/users.get?user_ids=${userId}&fields=city${this.commonInfo}`
    }

    getUserGroupMembers(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&fields=photo_400_orig, city&${this.commonInfo}`
    }

    getGroup(groupId) {
        return `${this.url}/groups.getById?group_id=${groupId}&fields=links&${this.commonInfo}`
    }

    getGroupID(groupId) {
        return `${this.url}/groups.getMembers?group_id=${groupId}&${this.commonInfo}`
    }
}

export const urls = new Urls()