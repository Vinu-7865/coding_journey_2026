# 📅 Day 4 – Git Fundamentals

**Phase:** 1 – Computer Science & Web Foundations
**Date:** _(fill in today's date)_
**Hours spent:** ~5–6 hours

---

## 🧠 What I Learned Today

### 1. What Git Actually Is

Git is a **content-addressable file system**. It stores snapshots of your project, not diffs. Every file is stored as its SHA-1 hash. Same content = same hash = stored only once.

When you run `git init`, Git creates a `.git` folder. That folder IS the entire repository. Delete it and all history is gone.

```
.git/
├── HEAD              ← which branch you're on ("ref: refs/heads/main")
├── config            ← repo settings
├── objects/          ← ALL content stored here (blobs, trees, commits)
├── refs/
│   └── heads/
│       └── main      ← contains: a3f8c2d... (just a commit hash)
└── index             ← the staging area
```

---

### 2. Git's 4 Object Types

| Type | What it stores |
|------|---------------|
| **blob** | File content, hashed with SHA-1 |
| **tree** | A directory — list of blobs + other trees with filenames |
| **commit** | Pointer to a tree + parent commit + author + message |
| **tag** | Named pointer to a specific commit |

```bash
# Hash a string — see how Git does it:
echo "hello" | git hash-object --stdin
# ce013625030ba8dba906f756967f9e9ca394464a

# Inspect any object:
git cat-file -p <hash>   # print contents
git cat-file -t <hash>   # print type (blob/tree/commit)
```

---

### 3. The 3 Areas of Git

```
Working Directory  ──git add──▶  Staging Area  ──git commit──▶  Repository
  (files on disk)                  (.git/index)                (.git/objects)

◀──── git restore ────────────────────────────────────────────────────
◀──── git restore --staged ─────────────────────
                                               ◀──── git reset ───────
```

- **Working directory** — your actual files. Git watches but hasn't acted yet.
- **Staging area** — preparation zone. Pick exactly what goes in the next commit.
- **Repository** — permanent history. Once committed, it lives in `.git/objects/` forever.

**Key:** `git add` does NOT push to GitHub. It moves to staging. `git commit` moves to local repo. `git push` sends to GitHub.

---

### 4. Core Commands

```bash
git init                     # create .git folder
git status                   # see what's changed and what's staged
git add file.txt             # stage one file
git add .                    # stage everything
git commit -m "message"      # create a snapshot
git log                      # full history
git log --oneline            # compact: hash + message
git log --oneline --graph    # with branch visualization
git log --oneline -5         # last 5 commits only
git show abc1234             # full details of one commit
git diff                     # unstaged changes vs last commit
git diff --staged            # staged changes vs last commit
git diff HEAD~1              # current vs 1 commit ago
```

---

### 5. Undo Commands — Safest to Most Dangerous

```bash
# ✅ SAFE — unstage without losing changes
git restore --staged file.txt

# ✅ SAFE — fix last commit message (before pushing!)
git commit --amend -m "correct message"

# ✅ SAFE — undo a pushed commit by adding a new commit
git revert abc1234

# ⚠️ CAREFUL — undo last commit, keep changes staged
git reset --soft HEAD~1

# ⚠️ CAREFUL — undo last commit, keep changes unstaged
git reset HEAD~1

# ❌ DANGEROUS — discard working dir changes (NO UNDO)
git restore file.txt

# ❌ DANGEROUS — undo commit AND delete all changes
git reset --hard HEAD~1
```

**Rule:** Never `reset --hard` or `push --force` on commits already pushed to a shared branch. Use `git revert` instead — it preserves history.

---

### 6. Branches — Just Pointers

A branch is literally a file in `.git/refs/heads/` containing a commit hash. Creating a branch is instant — it just creates a tiny file. No data is copied.

```bash
git branch                        # list branches (* = current)
git checkout -b feature/name      # create and switch
git checkout main                 # switch to main
git merge feature/name            # merge into current branch
git branch -d feature/name        # delete merged branch

# Proof — a branch is just a file:
cat .git/refs/heads/main
# a3f8c2d1e9b4...  ← just a 40-char commit hash

# HEAD points to current branch:
cat .git/HEAD
# ref: refs/heads/main
```

---

### 7. Remote — GitHub

```bash
git remote add origin https://github.com/you/repo.git
git push -u origin main     # push + set upstream (first time only)
git push                    # push after that
git pull                    # fetch + merge latest from remote
git clone https://...       # copy entire repo to your machine
git remote -v               # see configured remotes
```

---

## 🔍 What I Explored in .git

```bash
ls -la .git/                       # see all Git internals
cat .git/HEAD                      # see current branch
cat .git/refs/heads/main           # see latest commit hash
git cat-file -p <commit-hash>      # see commit object
git cat-file -p <tree-hash>        # see directory snapshot
git cat-file -p <blob-hash>        # see file content
echo "hello" | git hash-object --stdin  # hash content manually
```

**Key insight:** Every file in Git history is accessible forever by its hash. This is why Git never loses data — and why committed secrets are permanent even if you delete the file.

---

## ✅ Quiz Results

| Question | Result |
|----------|--------|
| Unstage a file without losing changes? | ✅ `git restore --staged file.txt` |
| What is a branch at the file system level? | ✅ A file in .git/refs/heads/ containing a commit hash |
| Safe way to undo a pushed commit on shared branch? | ✅ `git revert <hash>` — creates new commit, preserves history |

---

## 💡 Key Takeaways

1. **Git stores snapshots, not diffs.** Every commit is a full snapshot of every file.
2. **Content = hash.** Same file content anywhere = same SHA-1 hash = stored once.
3. **The 3 areas explain everything.** Working dir → staging (add) → repo (commit) → GitHub (push).
4. **A branch is just a file with a hash.** Creating one is instant and costs almost nothing.
5. **`git revert` is always safe.** `git reset --hard` is dangerous on shared branches.
6. **Committed secrets live forever.** Git history is permanent — rotate any leaked credentials immediately.
7. **`.git/` IS the repository.** Deleting it deletes all history.

---

