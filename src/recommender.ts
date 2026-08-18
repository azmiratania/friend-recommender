/** You'll implement this. */

import { SocialNetwork } from "./social_network";

export class Recommender {
    private network: SocialNetwork;

    constructor(network: SocialNetwork) {
        this.network = network;
    }

    recommend(user: string, maxRecommendations: number = 5): string[] {
        return [];
    }
}
