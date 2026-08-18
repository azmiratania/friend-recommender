/** Tests for Recommender. */

import { SocialNetwork } from "./social_network";
import { Recommender } from "./recommender";
import { getHugeNetwork } from "./data";

function buildSmallNetwork(): SocialNetwork {
    const net = new SocialNetwork();
    const edges: [string, string][] = [
        ["Alice", "Bob"], ["Alice", "Charlie"], ["Alice", "Diana"],
        ["Bob", "Charlie"], ["Bob", "Eve"],
        ["Charlie", "Diana"], ["Charlie", "Eve"], ["Charlie", "Frank"],
        ["Diana", "Frank"], ["Diana", "Grace"],
        ["Eve", "Frank"], ["Eve", "Heidi"],
        ["Frank", "Grace"], ["Frank", "Heidi"],
        ["Grace", "Ivan"], ["Grace", "Judy"],
        ["Heidi", "Ivan"],
        ["Ivan", "Judy"],
        ["Judy", "Karl"],
        ["Karl", "Liam"],
    ];
    for (const [a, b] of edges) {
        net.addFriendship(a, b);
    }
    return net;
}

test("test_basic_recommendation_order", () => {
    const net = buildSmallNetwork();
    const rec = new Recommender(net);
    const results = rec.recommend("Alice");
    // expect(results.length > 0).toBe(true);
    // expect(results[0]).toBe("????");
});

// test("test_excludes_self_and_existing_friends", () => {
//     const net = buildSmallNetwork();
//     const rec = new Recommender(net);
//     const results = rec.recommend("Alice");
//     expect(results.includes("Alice")).toBe(false);
//     expect(results.includes("Bob")).toBe(false);
//     expect(results.includes("Charlie")).toBe(false);
//     expect(results.includes("Diana")).toBe(false);
// });

// test("test_limit_to_five", () => {
//     const net = buildSmallNetwork();
//     const rec = new Recommender(net);
//     const results = rec.recommend("Alice");
//     expect(results.length <= 5).toBe(true);
// });

// test("test_no_valid_candidates", () => {
//     const net = new SocialNetwork();
//     net.addUser("Alice");
//     const rec = new Recommender(net);
//     const results = rec.recommend("Alice");
//     expect(JSON.stringify(results)).toBe("[]");
// });

// test("test_should_be_fast", () => {
//     const { users, friendships } = getHugeNetwork();
//     const net = new SocialNetwork();
//     for (const user of users) {
//         net.addUser(user);
//     }
//     for (const [a, b] of friendships) {
//         net.addFriendship(a, b);
//     }
//     const rec = new Recommender(net);
//     const testUsers = net.getAllUsers().slice(0, 200);
//     const start = Date.now();
//     for (const user of testUsers) {
//         rec.recommend(user);
//     }
//     const elapsed = (Date.now() - start) / 1000;
//     const expectedMax = 0.2;
//     expect(elapsed < expectedMax).toBe(true);
// });
