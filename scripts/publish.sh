#!/bin/sh

fail () {
    printf "${RED}$@\nAborting\n"
    exit -1
}

command_exists () {
    type "$1" >/dev/null 2>&1
}

if ! command_exists superman ; then
    fail 'superman is required to publish packages'
fi

# 重新bootstrap，以防有人改了组件的依赖
lerna clean --yes
lerna bootstrap

# 循序执行，因为zent依赖其他包prepublish后的结果，会比较慢
lerna publish --exact --concurrency 1