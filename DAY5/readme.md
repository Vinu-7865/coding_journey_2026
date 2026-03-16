# 📅 Day 5 – GitHub Workflow

**Phase:** 1 – Computer Science & Web Foundations

**Hours spent:** ~5–6 hours

---

## 🧠 What I Learned Today

### 1. Git vs GitHub — Not the Same Thing

| | Git | GitHub |
|---|---|---|
| What it is | A tool on your computer | A website |
| What it does | Tracks file history locally | Hosts repos + adds collaboration |
| Works offline | Yes | No |
| Alternatives | — | GitLab, Bitbucket, Gitea |

Git can work completely without GitHub. GitHub is useless without Git.

---

### 2. Fork vs Clone

**Clone** — copy a repo to your local machine. Push back if you have permission.
```bash
git clone https://github.com/you/my-saas.git
```

**Fork** — make your own GitHub copy of someone else's repo. No write access needed.
```
Original repo → (Fork on GitHub) → Your GitHub copy → (Clone) → Local machine
                                                    → (PR) → Original repo
```

**Keep your fork updated:**
```bash
git remote add upstream https://github.com/original/repo.git
git fetch upstream
git merge upstream/main
```

---

### 3. The Pull Request Workflow

This is the workflow used at every professional team:

```
1. git checkout -b feature/your-feature     # branch from main
2. make commits on the branch
3. git push -u origin feature/your-feature  # push branch to GitHub
4. Open PR on GitHub: base: main ← compare: feature/your-feature
5. Team reviews, leaves comments
6. Push more commits to same branch (PR updates automatically)
7. Merge the PR on GitHub
8. git checkout main && git pull             # get the merged changes locally
9. git branch -d feature/your-feature       # delete old branch
```

**Good PR commit messages:** present tense, describe what it does:
- `add user authentication`
- `fix login redirect bug`
- `update README with setup instructions`

---

### 4. Merge Conflicts

Happen when two branches changed the **same lines** of the same file.

```
<<<<<<< HEAD              ← your current branch
PORT=8080
=======                   ← divider
PORT=4000
>>>>>>> feature/update-port  ← incoming branch
```

**3-step resolution — same every time:**
```bash
# Step 1: Edit the file. Delete ALL conflict markers. Keep correct code.
# Step 2:
git add conflicted-file.txt
# Step 3:
git commit -m "resolve conflict — use port 3000"
```

**During a conflict, useful commands:**
```bash
git status                 # see which files have conflicts
git diff                   # see all unresolved conflicts
git merge --abort          # cancel the merge entirely if needed
```

---

### 5. .gitignore — Complete Patterns

```gitignore
# Exact file
.env

# All files with extension
*.log
*.tmp
*.pem
*.key

# Entire folder
node_modules/
dist/
build/

# Any depth
**/logs/

# Negate — don't ignore this one
!important.log
```

**Verify and fix:**
```bash
git check-ignore -v .env        # confirm .env is being ignored
git ls-files                    # see everything git is tracking
git rm --cached .env            # stop tracking a file (keeps it on disk)
```

---

### 6. Git Tags — Marking Releases

Tags are permanent pointers to commits — unlike branches they never move.

```bash
git tag -a v1.0.0 -m "first release"   # annotated tag
git push origin v1.0.0                  # push one tag
git push origin --tags                  # push all tags
git tag                                 # list tags
git show v1.0.0                         # see tag details
```

---

### 7. Useful GitHub Features

| Feature | What it does |
|---------|-------------|
| **Pull Requests** | Code review + merge workflow |
| **Issues** | Track bugs and features |
| **Actions** | CI/CD — auto-run scripts on push |
| **Protected branches** | Force PRs, block direct pushes to main |
| **GitHub Pages** | Free static site hosting from a repo |

**Issue reference in commit:**
```bash
git commit -m "fix login redirect closes #42"
# This auto-closes issue #42 when merged to main
```

---

---

## ✅ Quiz Results

| Question | Result |
|----------|--------|
| How to update a fork from the original repo? | ✅ `git remote add upstream` + `git fetch upstream` + `git merge upstream/main` |
| What does `<<<<<<< HEAD` show in a conflict? | ✅ The version from your current branch (the one you merged FROM) |
| What does `git pull` do under the hood? | ✅ `git fetch` + `git merge` — two commands in one |

---

## 💡 Key Takeaways

1. **Pull Requests are the unit of work on every team.** Branch → commit → push → PR → review → merge. Always.
2. **Merge conflicts aren't scary.** Edit file, remove markers, git add, git commit. Same 3 steps every time.
3. **Fork = your GitHub copy. Clone = your local copy.** Fork first, then clone your fork for open source.
4. **`git pull` = `git fetch` + `git merge`.** Understanding this explains all pull/push confusion.
5. **Protected branches force quality.** No direct pushes to main — everything goes through PR review.
6. **Tags mark milestones permanently.** Unlike branches, they never move forward.

---
