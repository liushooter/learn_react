.RECIPEPREFIX = >

.PHONY: css
css:
> mkdir -p bundle
> postcss --watch --use autoprefixer --use postcss-import css/*.css --dir bundle/

.PHONY: server
server:
> browser-sync start --server --files='index.html,public/*.html,bundle/*.css'

.PHONY: clean
clean:
> rm -rf bundle

# http://dengzuoheng.github.io/makefile-advance/
# The .RECIPEPREFIX is only supported since make 3.82
