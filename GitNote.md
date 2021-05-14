

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


```



