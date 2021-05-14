

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

```


