/** Read this first. */

export class SocialNetwork {
    private _friends: Map<string, Set<string>> = new Map();

    addUser(name: string): void {
        if (!this._friends.has(name)) {
            this._friends.set(name, new Set());
        }
    }

    addFriendship(userA: string, userB: string): void {
        this.addUser(userA);
        this.addUser(userB);
        // Store the friendship in only one direction: userA follows/knows userB.
        // If you want a mutual friendship, add userA to userB's set as well.
        this._friends.get(userA)!.add(userB);
    }

    getFriends(user: string): Set<string> {
        return this._friends.get(user) ?? new Set();
    }

    getAllUsers(): string[] {
        return Array.from(this._friends.keys());
    }

    mutualFriendsCount(userA: string, userB: string): number {
        const friendsA = this.getFriends(userA);
        const friendsB = this.getFriends(userB);
        let count = 0;
        for (const f of friendsA) {
            if (friendsB.has(f)) count++;
        }
        return count;
    }

    isValidRecommendation(user: string, candidate: string): boolean {
        if (user === candidate) return false;
        if (this.getFriends(user).has(candidate)) return false;
        return true;
    }
}
