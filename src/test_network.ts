/** Tests for SocialNetwork — Bug Finding phase (bug 1). */

import { SocialNetwork } from "./social_network";

test("test_add_user_and_get_friends", () => {
    const net = new SocialNetwork();
    net.addUser("Alice");
    net.addUser("Bob");
    net.addFriendship("Alice", "Bob");
    expect(net.getFriends("Alice").has("Bob")).toBe(true);
});

test("test_mutual_friends", () => {
    const net = new SocialNetwork();
    net.addFriendship("Alice", "Bob");
    net.addFriendship("Alice", "Charlie");
    net.addFriendship("Bob", "Charlie");
    const count = net.mutualFriendsCount("Alice", "Bob");
    expect(count).toBe(1);
});

test("test_no_self_recommendation", () => {
    const net = new SocialNetwork();
    net.addUser("Alice");
    expect(net.isValidRecommendation("Alice", "Alice")).toBe(false);
});

test("test_bidirectional_friendship", () => {
    const net = new SocialNetwork();
    net.addFriendship("Alice", "Bob");
    expect(net.getFriends("Bob").has("Alice")).toBe(true);
});
