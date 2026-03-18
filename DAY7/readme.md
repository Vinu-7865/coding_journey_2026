# 📅 Day 7 – Phase 1 Review Complete

**Phase:** 1 – Computer Science & Web Foundations ✅ COMPLETE


---

## ✅ Phase 1 Complete — Everything I Now Know

### OS & File System
- CPU executes instructions. RAM is temporary workspace. Storage is permanent. Flow: storage → RAM → CPU.
- OS manages hardware on behalf of programs. Apps can't talk to hardware directly.
- Process = isolated running program with own memory. Thread = unit inside a process sharing that memory.
- Node.js = single process, single thread (event loop handles concurrency).
- Inode = metadata + pointer to data blocks. Filename is just a pointer to an inode.
- Renaming = instant (pointer change). Copying = slow (data duplication).
- Hard link → inode directly (survives target deletion). Symlink → filename (breaks if target deleted).
- Always use `__dirname` in Node.js — relative paths depend on where you run from, `__dirname` doesn't.
- chmod 600 = secrets. chmod 755 = executables. chmod 644 = public files. r=4 w=2 x=1.
- 4 env var scopes: system → user → session → process. `.env` file is local only, never goes to production.

### Terminal
- 20 core commands: ls, find, grep, tail -f, ps aux, kill, curl, wc, less, chmod, du, df, which, history, sed, sort, uniq, &&, ||, &
- Pipe `|` chains commands. `>` overwrites file. `>>` appends. `2>/dev/null` silences errors.
- Shell script: `#!/bin/bash`, variables, if/else, for loops, `$(command)` substitution, `chmod +x`.
- `2>&1` redirects stderr to same destination as stdout.
- Built check.sh — project health check script.

### Git
- Git stores snapshots not diffs. Every file = SHA-1(content) stored as a blob.
- 4 object types: blob (file), tree (directory), commit (snapshot), tag (named pointer).
- 3 areas: working dir → (git add) → staging → (git commit) → repository → (git push) → GitHub.
- Branch = file in `.git/refs/heads/` containing one commit hash. Creating a branch = creating a tiny file.
- HEAD = pointer to current branch. Current branch = pointer to latest commit.
- Safe undos: `restore --staged` (unstage), `revert` (undo pushed commit safely).
- Dangerous: `restore` (discard working changes), `reset --hard` (destroy commits + changes).
- Never `reset --hard` + `push --force` on shared branches — rewrites history for everyone.

### Web Basics
- Internet = physical infrastructure. WWW = one service running on it (websites over HTTP).
- IP gets to the machine. Port gets to the program. IP:port = full address.
- IPv4 = 32-bit (4 billion addresses, running out). IPv6 = 128-bit (virtually unlimited).
- Private IPs (192.168.x.x, 10.x.x.x) exist only inside local networks. Router does NAT.
- Essential ports: 22=SSH, 80=HTTP, 443=HTTPS, 3000=Node, 5432=PostgreSQL, 27017=MongoDB.
- HTTP methods: GET (read), POST (create), PUT (replace), PATCH (partial update), DELETE (remove).
- Status codes: 2xx success, 3xx redirect, 4xx client error, 5xx server error. 401≠403.
- HTTPS = HTTP + TLS. Same format, encrypted in transit. Padlock = encrypted + identity verified.
- DNS converts domain → IP: cache → ISP resolver → root → TLD → authoritative → response.
- TTL controls how long DNS is cached. Changes take time to propagate globally.
- Full request journey: DNS → TCP → TLS → HTTP request → server processes → HTTP response → client.

---

## 🏆 Phase 1 Quiz Score

| Area | Self-assessed |
|------|--------------|
| OS & File System | /8 |
| Terminal | /8 |
| Git | /5 |
| Web Basics | /7 |
| Big Quiz | /15 |

---

## 💡 Weak Spots to Review Before Phase 2

_(Fill in anything you got wrong in the quiz or couldn't recall)_

- 
- 
- 

---

## 🗂️ Phase 1 Files Built

```
my-saas/
├── backend/
│   ├── config.js       ← env var config with fail-fast validation
│   ├── app.js
│   └── .env            ← gitignored, local only
├── frontend/
├── notes/
│   ├── day-01.md
│   ├── day-02.md
│   ├── day-03.md
│   ├── day-04.md
│   ├── day-05.md
│   ├── day-06.md
│   └── day-07.md
├── check.sh            ← project health check script
└── .gitignore          ← .env, node_modules, dist, logs, .DS_Store
```
