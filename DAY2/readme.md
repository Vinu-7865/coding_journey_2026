# 📅 Day 2 – File System Deep Dive & Environment Variables

**Phase:** 1 – Computer Science & Web Foundations  
**Date:** _(fill in today's date)_  
**Hours spent:** ~5–6 hours

---

## 🧠 What I Learned Today

### 1. Inodes — How Files Are Actually Stored

Every file on disk has two parts:

**Inode** — metadata only (size, permissions, owner, timestamps, and a pointer to where the actual data lives on disk). Think of it like a library card.

**Data blocks** — the actual file content, scattered across disk. Like the book pages.

```
filename → inode number → inode → data block addresses → actual data on disk
```

When Node.js does `fs.readFile('data.txt')`:
1. OS looks up 'data.txt' in the directory → gets the inode number
2. Reads the inode → finds which disk blocks contain the data
3. Reads those blocks into RAM
4. Returns the data to your program

**Why renaming a file is instant:**
Only the directory entry changes (the name → inode pointer). The actual data on disk never moves.

**Why copying a file is slow:**
The OS must physically duplicate all the data blocks on disk.

---

### 2. Hard Links vs Symlinks

```
Hard link:   filename  ──→  inode #42  ──→  data on disk
                                ↑
             filename2 ─────────┘    ← same inode, same data

Symlink:     filename  ──→  "points to filename2"  ──→  inode  ──→  data
```

| | Hard Link | Symlink |
|---|---|---|
| Points to | inode directly | filename |
| If target deleted | Data still exists | Link breaks |
| Cross filesystem | No | Yes |
| Real use case | Backups, deduplication | node_modules/.bin/ |

```bash
ln file.txt hardlink.txt        # create hard link (same inode)
ln -s file.txt symlink.txt      # create symlink (points to name)
ls -li                          # -i flag shows inode numbers
```

**Key test:**
```bash
echo "hello" > original.txt
ln original.txt hardlink.txt
rm original.txt
cat hardlink.txt                # still works — inode survives

ln -s hardlink.txt sym.txt
rm hardlink.txt
cat sym.txt                     # broken — symlink points to nothing
```

---

### 3. The PATH Variable — How Commands Are Found

When you type `node` in the terminal, the OS doesn't magically know where it is. It searches every folder listed in `$PATH`, left to right, until it finds a file named `node`.

```bash
echo $PATH
# /usr/local/bin:/usr/bin:/bin:/home/user/.npm-global/bin

which node      # tells you which folder it was found in
# /usr/local/bin/node

which git
# /usr/bin/git
```

**Why `npm install -g` makes commands available anywhere:**
It copies the binary into a folder that's already in your PATH (like `/usr/local/bin`). That's the entire trick — nothing more.

**Add a custom folder to PATH permanently:**
```bash
echo 'export PATH="$HOME/.my-tools:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

---

### 4. Environment Variable Scope Levels

Env vars have 4 scope levels. Each level inherits from the one above it. This is why a variable you set in one terminal window doesn't appear in another.

```
Level 1 — System-wide
  File: /etc/environment
  Applies to: ALL users, ALL sessions, permanent

Level 2 — User-wide  
  File: ~/.bashrc or ~/.zshrc
  Applies to: your user, all terminal sessions, permanent
  
Level 3 — Session only
  Command: export MY_VAR="value"
  Applies to: current terminal window only, gone when closed

Level 4 — Single process only
  Command: MY_VAR=value node app.js
  Applies to: that one command only
```

```bash
# Permanent for your user:
echo 'export MY_VAR="hello"' >> ~/.zshrc
source ~/.zshrc             # reload now without restarting terminal

# Session only:
export TEMP_VAR="hello"     # gone when terminal closes

# Single command:
NODE_ENV=production node app.js
```

**How Node.js reads env vars:**
Child processes inherit the parent process's env vars. Your terminal is the parent. When you run `node app.js`, Node inherits all your terminal's env vars — including anything you exported.

---

### 5. Absolute vs Relative Paths in Node.js

```javascript
// RELATIVE — depends on where you RUN the script from (fragile)
fs.readFile('./config.json')        // breaks if called from parent folder

// ABSOLUTE using __dirname — always points to the script's own folder (safe)
fs.readFile(__dirname + '/config.json')   // always works
```

```bash
# Proof — run from backend folder:
cd my-saas/backend
node app.js
# __dirname  = /home/user/my-saas/backend  ✓
# process.cwd() = /home/user/my-saas/backend  ✓

# Run from parent folder — cwd changes but __dirname does NOT:
cd ..
node backend/app.js
# __dirname  = /home/user/my-saas/backend  ✓ (same, always)
# process.cwd() = /home/user/my-saas       ✗ (changed — relative paths break here)
```

**Rule: Always use `__dirname` for file paths in Node.js. Never use `./`.**

---

### 6. File Permissions — chmod

```
Permission string breakdown:  -rwxr-xr--

Position:  - | rwx | r-x | r--
           │    │     │     └── others (everyone else)
           │    │     └──────── group
           │    └────────────── owner
           └─────────────────── file type (- = file, d = directory)
```

**The numeric system:**
```
r = 4
w = 2
x = 1

7 = 4+2+1 = rwx   (full access)
6 = 4+2+0 = rw-   (read + write)
5 = 4+0+1 = r-x   (read + execute)
4 = 4+0+0 = r--   (read only)
0 = 0+0+0 = ---   (no access)
```

**Most common patterns you will use on servers:**
```bash
chmod 600 .env           # owner read/write only — for secrets
chmod 755 script.sh      # owner full, others read+execute — for scripts
chmod 644 index.html     # owner read/write, others read — for public files
chmod 000 locked.txt     # nobody can do anything
chmod -R 755 /var/www    # apply recursively to entire folder

# Symbolic style:
chmod +x script.sh       # add execute for everyone
chmod u+w file.txt       # add write for owner only
chmod o-r secret.txt     # remove read from others
```

---

## 🏗️ Project Built Today

Built a proper config system for the SaaS backend using environment variables:

**Folder structure after today:**
```
my-saas/
├── backend/
│   ├── .env            ← local only, gitignored
│   ├── config.js       ← reads and validates all env vars
│   ├── app.js          ← imports config, never touches process.env directly
│   └── package.json
├── frontend/
├── notes/
│   ├── day-01.md
│   └── day-02.md
└── .gitignore          ← .env listed here
```

**config.js:**
```javascript
require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  db: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  appName: process.env.APP_NAME || 'App',
};

// Fail fast at startup if required vars are missing
['DATABASE_URL', 'JWT_SECRET'].forEach(key => {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
});

module.exports = config;
```

**Why "fail fast" matters:**
Without the validation, your app starts up fine but crashes later when it tries to use `config.db` and gets `undefined`. With fail fast, it crashes immediately at startup with a clear error message — much easier to debug.

---

## 💻 New Terminal Commands Practiced

```bash
ls -li                          # show files with inode numbers
ln file.txt hardlink.txt        # create hard link
ln -s file.txt symlink.txt      # create symbolic link
stat filename                   # show full file metadata (inode, size, times, links)
which node                      # find where a command lives in PATH
source ~/.zshrc                 # reload shell config without restarting terminal
chmod 600 .env                  # set permissions with numeric mode
chmod +x script.sh              # add execute permission with symbolic mode
chmod -R 755 folder/            # apply permissions recursively
```

---

## ✅ Quiz Results

| Question | My Answer | Result |
|----------|-----------|--------|
| Renaming a 4GB file — how long? | Instant — only the directory entry changes, no data moves | ✅ |
| What does chmod 640 give? | Owner: rw-, Group: r--, Others: --- | ✅ |
| Why is process.env.JWT_SECRET undefined in production? | .env file doesn't exist on the server — must set env vars directly | ✅ |

---

## 💡 Key Takeaways

1. **Renaming = instant. Copying = slow.** The inode model explains why. Data never moves on rename.
2. **Symlinks are everywhere in Node.js.** `node_modules/.bin/` is entirely symlinks pointing to executables.
3. **PATH is just a colon-separated list of folders.** The OS checks left to right — first match wins.
4. **The .env file never goes to production.** Set env vars directly on the server via the hosting dashboard or export commands.
5. **Always use `__dirname` in Node.js**, never `./` — relative paths depend on where you run the script from, not where the script lives.
6. **chmod 600 for secrets, 755 for executables.** Memorize these two — you'll use them constantly on servers.
7. **Fail fast on missing env vars.** Crash at startup with a clear message rather than mysteriously failing later.

---

