---
id: other-1
title: How To Rebase Conflict Locally
sidebar_label: How To Rebase Conflict Locally
---

# How To Rebase Conflict Locally

There is a target branch (e.g. master), and a feature branch (branch that we need to merge into target branch).

1. `git checkout {target branch}`
2. `git pull {target branch}`
3. `git checkout {feature branch}`
4. `git rebase {target branch}`
5. After resolve confict, `git add` . Don't commit
6. `git rebase --continue`
7. After success, `git push origin {feature branch} --force-with-lease`