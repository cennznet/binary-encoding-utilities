#!/bin/sh
#
# Publish the package to npm
#
set -ex
echo "//registry.npmjs.org/:_authToken=${NPM_KEY}" > /root/.npmrc
npm pack
npm publish --access public
