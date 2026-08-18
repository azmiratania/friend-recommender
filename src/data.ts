/**
 * Sample data for testing the social network.
 */

declare const __dirname: string;
declare function require(name: string): { readFileSync(path: string, encoding: string): string; join(...paths: string[]): string; };

const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");

function loadNetwork(filename: string): { users: string[]; friendships: [string, string][] } {
    const filepath = path.join(DATA_DIR, filename);
    const content = fs.readFileSync(filepath, "utf-8");
    const users: string[] = [];
    const friendships: [string, string][] = [];
    for (const line of content.split("\n")) {
        const parts = line.trim().split(",");
        if (parts.length === 1 && parts[0]) {
            users.push(parts[0]);
        } else if (parts.length === 2) {
            friendships.push([parts[0], parts[1]]);
        }
    }
    return { users, friendships };
}

export function getHugeNetwork(): { users: string[]; friendships: [string, string][] } {
    return loadNetwork("users_huge.txt");
}

export function getSmallNetwork(): { users: string[]; friendships: [string, string][] } {
    const users = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank",
                   "Grace", "Heidi", "Ivan", "Judy", "Karl", "Liam"];
    const friendships: [string, string][] = [
        ["Alice", "Bob"],
        ["Alice", "Charlie"],
        ["Alice", "Diana"],
        ["Bob", "Charlie"],
        ["Bob", "Eve"],
        ["Charlie", "Diana"],
        ["Charlie", "Eve"],
        ["Charlie", "Frank"],
        ["Diana", "Frank"],
        ["Diana", "Grace"],
        ["Eve", "Frank"],
        ["Eve", "Heidi"],
        ["Frank", "Grace"],
        ["Frank", "Heidi"],
        ["Grace", "Ivan"],
        ["Grace", "Judy"],
        ["Heidi", "Ivan"],
        ["Ivan", "Judy"],
        ["Judy", "Karl"],
        ["Karl", "Liam"],
    ];
    return { users, friendships };
}
