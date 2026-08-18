/**
 * Runs the Recommender. It's useful to see how the system is called.
 */

import { getSmallNetwork } from "./data";
import { SocialNetwork } from "./social_network";
import { Recommender } from "./recommender";

function banner(legend: string): void {
    const border = "#".repeat(legend.length + 8);
    console.log(border);
    console.log(`#   ${legend}   #`);
    console.log(border);
}

function main(): void {
    banner("BEGIN CODE OUTPUT");

    const { users, friendships } = getSmallNetwork();
    const network = new SocialNetwork();
    for (const user of users) {
        network.addUser(user);
    }
    for (const [a, b] of friendships) {
        network.addFriendship(a, b);
    }

    const recommender = new Recommender(network);

    for (const user of ["Alice", "Eve", "Karl"]) {
        const recs = recommender.recommend(user);
        console.log(`  ${user}: ${JSON.stringify(recs)}`);
    }

    banner("END CODE OUTPUT");
}

main();
