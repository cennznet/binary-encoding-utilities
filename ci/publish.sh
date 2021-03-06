#!/bin/sh
#
# Publish the package to npm
#
set -ex
echo "//registry.npmjs.org/:_authToken=${NPM_KEY}" > /root/.npmrc
# go to project dir
cd $@ 
npm pack
npm publish --access public
