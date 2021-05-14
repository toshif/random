`origin master` vs `origin/master`
* `origin master` is master branch in origin
* `origin/master` is a local copy of master branch in origin

Take changes on master into your branch
```
git checkout master
git pull
git checkout <mybranch1>
git merge master
git commit
```

Take changes on master into your branch ( simpler form )
https://git-scm.com/docs/git-pull
```
git pull origin master
# if something goes wrong, you can do - git reset
```


Basics

```shell
$ git pull
$ git push

# check remote
$ git remote

# check the current branch
$ git branch
* main
* 
# check all branches
$ git branch -a
* main
  remotes/origin/HEAD -> origin/main
  remotes/origin/bran1
  remotes/origin/main

# create a new branch and checkout the branch
$ git checkout -b bran1
Switched to a new branch "bran1"

This is shorthand for:
$ git branch bran1
$ git checkout bran1

Push the new branch to origin
$ git push --set-upstream origin bran1

# Check commits
$ git log


Visualize the log graph
$ git log --all --decorate --oneline --graph
* 5111b12 (HEAD -> bran1) uyoiu987
| *   14d46c0 (origin/main, origin/HEAD) Merge pull request #2 from toshif/bran2
| |\  
| | * b4c9135 (origin/bran2) asdf
| |/  
| *   7993307 Merge pull request #1 from toshif/bran1
| |\  
| |/  
...


# Check what I am about to push
$ git diff origin/bran2
diff --git a/t1a b/t1a
index 3613d14..7ed6bf8 100644
--- a/t1a
+++ b/t1a
@@ -1,5 +1,5 @@
 xyz
-
+nice


# fetch changes for your branch
$ git fetch

# fetch changes for master
$ git fetch origin master




```







