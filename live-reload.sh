#!/usr/bin/env bash

fast-live-reload -o\
    -ep "bash -c 'tsc -w src/main/core/*.ts --outDir lib/ -d --module commonjs'"\
    lib/ -e "bash -c 'tsdgen -o terminal-console.d.ts lib/*.d.ts'"
