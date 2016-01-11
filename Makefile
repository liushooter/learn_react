.RECIPEPREFIX = >
.PHONY: server
server:
> browser-sync start --server --files=public/index.html

# http://dengzuoheng.github.io/makefile-advance/
# The .RECIPEPREFIX is only supported since make 3.82