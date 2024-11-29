#!/bin/sh
ls | grep -v .fatherrc.js | grep -e '.js$' | xargs rm
# keep one d.ts to make vscode auto import working with corrcet path
rm ./es/icons/*.d.ts || echo
