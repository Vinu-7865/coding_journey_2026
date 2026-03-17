# 📅 Day 5 – Web Basics

**Phase:** 1 – Computer Science & Web Foundations


---

## 🧠 What I Learned Today

### 1. Internet vs World Wide Web

The **internet** is physical infrastructure — cables, routers, fiber, wireless signals connecting billions of machines globally.

The **WWW** is one service that runs on the internet — websites accessed via HTTP. Email, SSH, and FTP are also internet services but not the web.

---

### 2. IP Addresses

Every device needs a unique address so data knows where to go.

**IPv4** — 32-bit, written as 4 numbers: `192.168.1.1`
Only ~4 billion possible addresses — we've run out globally.

**IPv6** — 128-bit, vastly more addresses: `2001:0db8:85a3::8a2e:0370:7334`

**Public vs Private:**
```
Public IP  → your router's address, visible to the internet
             e.g. 203.0.113.45
Private IP → exists only inside your home network
             e.g. 192.168.1.45 (your laptop)
```

Your router does **NAT** — translates your private IP to its public one when sending requests out. Google sees your router's IP, not your laptop's.

```bash
curl ifconfig.me          # see your public IP
ipconfig getifaddr en0    # see your private IP (Mac)
nslookup google.com       # look up any domain's IP
traceroute google.com     # see the route packets take
```

---

### 3. Ports

IP gets data to the right **machine**. Port gets it to the right **program** on that machine.

Analogy: IP = building address, port = apartment number.

| Port | Service |
|------|---------|
| 22 | SSH |
| 80 | HTTP |
| 443 | HTTPS |
| 3000 | Node.js (convention) |
| 5432 | PostgreSQL |
| 27017 | MongoDB |
| 6379 | Redis |
| 25 | SMTP (email) |

```bash
lsof -i -P -n | grep LISTEN    # see what's listening on which ports (Mac)
ss -tlnp                        # Linux equivalent
lsof -i :3000                   # see what's using port 3000
```

---

### 4. HTTP — How Browser and Server Talk

HTTP is a **request-response protocol**. Browser sends a request, server sends a response.

**Request structure:**
```
GET /users HTTP/1.1
Host: api.example.com
Authorization: Bearer abc123
Content-Type: application/json
```

**Response structure:**
```
HTTP/1.1 200 OK
Content-Type: application/json

{"users": [...]}
```

**HTTP Methods:**
```
GET    → retrieve (no body, idempotent)
POST   → create (has body, NOT idempotent)
PUT    → replace entire resource (idempotent)
PATCH  → partial update
DELETE → remove (idempotent)
```

Idempotent = same result no matter how many times you call it.

**Status codes:**
```
2xx → Success
  200 OK             → worked
  201 Created        → resource created
  204 No Content     → success, no body

3xx → Redirect
  301 Moved Permanently  → permanent redirect
  304 Not Modified       → use cached version

4xx → Client error (your fault)
  400 Bad Request    → invalid input
  401 Unauthorized   → not logged in
  403 Forbidden      → logged in but no permission
  404 Not Found      → resource doesn't exist
  429 Too Many       → rate limited

5xx → Server error (my fault)
  500 Internal Error → bug in my code
  503 Unavailable    → server down or overloaded
```

**Key distinction:** 401 = not authenticated. 403 = authenticated but not authorized. Different!

---

### 5. HTTPS and TLS

HTTP sends plain text — anyone between you and server can read everything.
HTTPS = HTTP + TLS encryption layer.

**TLS handshake (simplified):**
```
1. Browser → Server: "Hello, I support these encryption methods"
2. Server → Browser: "Here's my SSL certificate (signed by a CA)"
3. Browser: verifies cert is from a trusted Certificate Authority
4. Both agree on a symmetric encryption key
5. All data encrypted from now on
```

The padlock = connection is encrypted AND server identity verified.
It does NOT mean the site is safe — just that your connection to it is private.

```bash
curl -v https://github.com 2>&1 | grep -A5 "SSL"   # see cert details
curl -w "\nDNS: %{time_namelookup}s\nTLS: %{time_appconnect}s\nTotal: %{time_total}s\n" -o /dev/null -s https://github.com
```

---

### 6. DNS — Domain Name System

DNS converts domain names to IP addresses. It's the internet's phone book.

**Full resolution process:**
```
1. Check local cache — already know it?
2. Ask ISP's DNS resolver
3. Ask root nameserver → "who handles .com?"
4. Ask .com TLD server → "who handles example.com?"
5. Ask example.com nameserver → returns IP
6. Cache result (respecting TTL)
7. Connect to that IP
```

**DNS record types:**
```
A     → domain to IPv4 address
AAAA  → domain to IPv6 address
CNAME → domain alias (points to another domain)
MX    → mail server for this domain
TXT   → text records (verification, SPF, etc.)
```

**TTL** (Time To Live) = how long DNS resolvers cache the result.
When you change DNS, it takes up to 48hrs to propagate globally because of cached TTLs.

```bash
nslookup github.com             # basic DNS lookup
dig github.com                  # detailed DNS lookup with timing
dig @8.8.8.8 github.com         # ask Google's DNS directly
dig @1.1.1.1 github.com         # ask Cloudflare's DNS directly
```

---

### 7. Full Request Journey

When you type `https://api.example.com/users`:

```
1. DNS lookup        → resolve domain to IP (~20ms first time, ~0ms cached)
2. TCP connection    → 3-way handshake with port 443 (~50ms)
3. TLS handshake     → negotiate encryption, verify cert (~100ms)
4. HTTP request sent → GET /users over encrypted channel
5. Server processes  → Node.js runs, queries MongoDB, builds response
6. HTTP response     → 200 OK + JSON body sent back
7. Client receives   → React parses JSON, updates state, re-renders
```

Steps 1–3 happen before your code even runs. Slow APIs are often slow DNS or distant servers.

---

## 💻 Commands Practiced Today

```bash
curl ifconfig.me                          # public IP
curl -v https://site.com                  # verbose HTTP with headers
curl -I https://site.com                  # headers only
curl -X POST url -H "Content-Type: application/json" -d '{"key":"val"}'
curl -L http://site.com                   # follow redirects
curl -w "\nTotal: %{time_total}s\n" -o /dev/null -s https://site.com
nslookup domain.com                       # DNS lookup
dig domain.com                            # detailed DNS
dig @8.8.8.8 domain.com                  # query specific DNS server
traceroute domain.com                     # trace network path
lsof -i :3000                             # what's on port 3000
```

---

## ✅ Quiz Results

| Question | Result |
|----------|--------|
| 403 for logged-in user deleting someone else's post — correct? | ✅ Yes — authenticated but not authorized |
| Colleague sees old server after DNS change — why? | ✅ DNS TTL cache — old IP cached until TTL expires |
| Difference between HTTP and HTTPS at protocol level? | ✅ Same HTTP format, HTTPS adds TLS encryption layer underneath |

---

## 💡 Key Takeaways

1. **The internet is physical.** Cables, fiber, and routers — not a cloud.
2. **IP gets to the machine. Port gets to the program.** Always think of them together.
3. **HTTP is just text.** A request is literally a formatted string of text sent over a TCP connection.
4. **HTTPS = HTTP + TLS.** Same format, just encrypted. Port 443 instead of 80.
5. **DNS adds latency.** Every uncached domain lookup costs ~20ms before your request even starts.
6. **401 ≠ 403.** 401 = not logged in. 403 = logged in but forbidden. Use correctly in your APIs.
7. **TTL explains propagation delay.** DNS changes take time because of caching at every resolver.

---

