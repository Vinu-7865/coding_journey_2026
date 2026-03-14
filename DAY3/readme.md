# 📅 Day 3 – Terminal Mastery

**Phase:** 1 – Computer Science & Web Foundations
**Date:** _(fill in today's date)_
**Hours spent:** ~5–6 hours

---

## 🧠 What I Learned Today

### 1. stdin, stdout, stderr

Every process has 3 default streams:

| # | Name | Default | Description |
|---|------|---------|-------------|
| 0 | stdin | keyboard | input coming in |
| 1 | stdout | screen | normal output |
| 2 | stderr | screen | error output |

```bash
node app.js > output.log       # redirect stdout to file
node app.js 2> errors.log      # redirect stderr to file
node app.js > all.log 2>&1     # redirect both to same file
find / -name "node" 2>/dev/null  # throw errors away
```

`/dev/null` is a black hole — anything sent there disappears forever.

---

### 2. The 20 Commands

```bash
# Navigation & Files
ls -lah                        # long + hidden files + human readable sizes
ls -lt                         # sorted by newest first
find . -name "*.js"            # find files by name
find . -type d                 # find all directories
find . -name ".env"            # check for misplaced .env files

# Viewing Content
cat file.txt                   # print entire file
head -n 20 file.txt            # first 20 lines
tail -n 20 file.txt            # last 20 lines
tail -f app.log                # follow log in real time (Ctrl+C to stop)
less file.txt                  # scroll large file (q=quit, /=search)

# Searching
grep "error" app.log           # find lines containing "error"
grep -r "TODO" .               # search all files recursively
grep -n "error" app.log        # show line numbers
grep -i "error" app.log        # case-insensitive
grep -v "info" app.log         # lines NOT matching
wc -l file.txt                 # count lines

# System & Processes
ps aux                         # all running processes
ps aux | grep node             # filter to node processes
kill 1234                      # graceful shutdown (SIGTERM)
kill -9 1234                   # force kill (SIGKILL) — no cleanup
top                            # live process monitor (q to quit)
df -h                          # disk space usage
du -sh folder/                 # size of specific folder
which node                     # find where command lives in PATH
history                        # all past commands
history | grep "git"           # search command history

# Power Commands
curl https://api.example.com   # make HTTP request from terminal
cmd1 && cmd2                   # run cmd2 only if cmd1 succeeds
cmd1 || cmd2                   # run cmd2 only if cmd1 fails
node app.js &                  # run in background, keep terminal free
sed 's/old/new/g' file.txt    # find and replace in file
cat file.txt | sort | uniq     # sort lines and remove duplicates
```

---

### 3. The Pipe Operator `|`

Connects stdout of one command to stdin of the next. Builds powerful chains:

```bash
# Count .js files
find . -name "*.js" | wc -l

# Find node processes and get their PIDs
ps aux | grep node | grep -v grep | awk '{print $2}'

# Watch only errors in a log
cat app.log | grep "ERROR" | tail -20

# Find biggest files
find . -type f | xargs du -sh 2>/dev/null | sort -rh | head -5
```

---

### 4. Redirects `>` and `>>`

```bash
echo "hello" > file.txt        # overwrite file
echo "world" >> file.txt       # append to file (keeps existing content)
node app.js > output.log       # save all stdout
node app.js 2> errors.log      # save only errors
node app.js > all.log 2>&1     # save everything
```

---

### 5. Shell Scripting Basics

```bash
#!/bin/bash              # shebang — tells OS to use bash

# Variables
NAME="Alex"
echo "Hello $NAME"

# Command substitution
NODE_V=$(node --version)
echo "Node: $NODE_V"

# If / else
if [ -f ".env" ]; then
  echo ".env exists"
else
  echo "WARNING: .env missing"
fi

# For loop
for folder in frontend backend notes; do
  if [ -d "$folder" ]; then
    echo "$folder exists"
  fi
done

# Arithmetic
COUNT=0
COUNT=$((COUNT + 1))
```

```bash
chmod +x script.sh     # make executable
./script.sh            # run it
```

---

### 6. Useful Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Tab` | Autocomplete filename or command |
| `↑` / `↓` | Cycle through command history |
| `Ctrl+R` | Search command history interactively |
| `Ctrl+C` | Cancel running command |
| `Ctrl+L` | Clear screen |
| `Ctrl+Z` | Pause process (bring back with `fg`) |

---

## 🏗️ Project Built Today

**`check.sh`** — a health check script for my SaaS project that:
- Checks .gitignore exists
- Verifies .env is gitignored
- Verifies node_modules is gitignored
- Checks required folders exist (frontend, backend, notes)
- Confirms Node.js is installed
- Prints a pass/fail count at the end

Run anytime: `./check.sh`

---

## ✅ Quiz Results

| Question | Result |
|----------|--------|
| What does `2>/dev/null` do? | ✅ Redirects stderr to /dev/null — silences error messages |
| Command to watch log lines appear in real time? | ✅ `tail -f app.log` |
| Difference between kill and kill -9? | ✅ kill=SIGTERM (graceful), kill -9=SIGKILL (force, no cleanup) |

---

## 💡 Key Takeaways

1. **Pipe `|` is your most powerful tool.** Chain simple commands to do complex things.
2. **`tail -f` is essential in production.** You'll watch logs with it every single day.
3. **`2>/dev/null` suppresses error noise.** Use it when errors are expected and irrelevant.
4. **`grep -r` searches entire codebases.** Faster than opening files manually.
5. **Shell scripts are just commands in a file.** `#!/bin/bash` + `chmod +x` + `./script.sh`.
6. **`kill` before `kill -9`.** Always give a process a chance to clean up first.
7. **`Ctrl+R` is a hidden superpower.** Search your entire command history instantly.

